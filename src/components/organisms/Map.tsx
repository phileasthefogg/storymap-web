import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mapSelector } from "../../reducers/rootReducer";
import useMap from "../../hooks/useMap";
import L, { LeafletMouseEvent } from "leaflet";
import styled from "styled-components";
import MapCardList from "./MapList";
import { getLocations } from "../../actions/mapActions";
import Modal from "../atoms/Modal";
import MapForm from "../molecules/MapForm";
import useMapbox from "../../hooks/useMapbox";

const Wrapper = styled.div<{ modalOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

const MemoryMap = () => {
  const { leaflet, addMarker } = useMap();
  const dispatch = useDispatch();
  const mapState = useSelector(mapSelector);
  const [showList, setShowList] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef();
  const mapbox = useMapbox(mapRef);

  useEffect(() => {
    if (leaflet) {
      //set up listeners
      leaflet.on("click", (coord: LeafletMouseEvent) =>
        handleMouseClick(coord)
      );
      //grab data on cold start
      if (mapState.list.length === 0) {
        dispatch(getLocations());
      }
    }
  }, [leaflet]);

  const handleMouseClick = (coord: LeafletMouseEvent) => {
    addMarker(coord.latlng);
    leaflet.flyTo(coord.latlng);
    setShowModal(true);
    setShowList(false);
  };

  useEffect(() => {
    mapState.list.forEach((loc: any) => {
      const newCoord = {
        lat: loc.coordinate.latitude,
        lng: loc.coordinate.longitude,
      };
      addMarker(newCoord);
    });
  }, [mapState.list]);

  return (
    <Wrapper modalOpen={showModal}>
      <Map id="memorymap" ref={mapRef.current}></Map>
      <MapCardList
        show={showList}
        markers={mapState.list}
        setDisplay={setShowList}
      />
      <Modal show={showModal} toggleModal={setShowModal} position="flex-end">
        <MapForm closeModal={() => setShowModal(false)} />
      </Modal>
    </Wrapper>
  );
};

export default MemoryMap;
