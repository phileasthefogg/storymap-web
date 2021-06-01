import { useState, useRef, useCallback } from "react";
import ReactMapGL, { NavigationControl, FlyToInterpolator } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import MapMarker from "../atoms/MapMarker";
import NewMarkerPopup from "../atoms/MapNewMarkerPopup";
import Modal from "../atoms/Modal";
import MapForm from "../molecules/MapForm";
import { parseGeocodeResult } from "../../helpers/geocodeResultParser";

const Mapbox = () => {
  const mapRef = useRef();
  const [viewport, setViewport] = useState<any>({
    latitude: 37.79488483598235,
    longitude: -122.40539269489221,
    zoom: 15.5,
  });
  const [searchBoundary] = useState<any>([
    -122.41316120200962, 37.7906482127437, -122.3976241877747,
    37.799121216283574,
  ]);
  const [tempMarker, setTempMarker] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
  }, []);
  const handleDblClick = useCallback((e) => {
    console.log("dblClick", e);
    setTempMarker({ longitude: e.lngLat[0], latitude: e.lngLat[1] });
    setViewport((v: any) => ({
      ...v,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
      zoom: 16,
    }));
  }, []);

  return (
    <>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={
          "pk.eyJ1IjoicGhpbGVhc3RoZWZvZ2ciLCJhIjoiY2trcndzeDFuMDFoNjJ2bXBxOGs4ajBsMSJ9.c3h4T5wf6LVhCSdt20zNfg"
        }
        maxZoom={20}
        minZoom={12}
        width={"100%"}
        height={"100%"}
        onViewportChange={handleViewportChange}
        doubleClickZoom={false}
        onDblClick={handleDblClick}
        transitionDuration={250}
        transitionInterpolator={new FlyToInterpolator()}
      >
        <NavigationControl style={{ top: ".5rem", left: ".5rem" }} />
        <Geocoder
          mapRef={mapRef}
          bbox={searchBoundary}
          mapboxApiAccessToken={
            "pk.eyJ1IjoicGhpbGVhc3RoZWZvZ2ciLCJhIjoiY2trcndzeDFuMDFoNjJ2bXBxOGs4ajBsMSJ9.c3h4T5wf6LVhCSdt20zNfg"
          }
          onViewportChange={handleViewportChange}
          onResult={({ result }: any) => {
            setTempMarker({
              ...parseGeocodeResult(result),
              longitude: result.geometry.coordinates[0],
              latitude: result.geometry.coordinates[1],
            });
          }}
          marker={true}
          position={"top-right"}
          types={"address, poi"}
          clearOnBlur={true}
          countries={"us"}
        />
        {tempMarker && (
          <MapMarker
            draggable={true}
            onDragEnd={(e) => {
              setTempMarker((t: any) => ({
                ...t,
                longitude: e.lngLat[0],
                latitude: e.lngLat[1],
              }));
            }}
            fill={"teal"}
            latitude={tempMarker.latitude}
            longitude={tempMarker.longitude}
            showClose={false}
            popup={
              <NewMarkerPopup
                confirmAction={() => {
                  setViewport((v: any) => ({ ...v, zoom: 17 }));
                  setShowModal(true);
                }}
                cancelAction={() => setTempMarker(null)}
                isOpen={showModal}
              />
            }
          />
        )}
        <MapMarker
          latitude={37.79488483598235}
          longitude={-122.40539269489221}
        />
      </ReactMapGL>
      {showModal && (
        <Modal show={showModal} toggleModal={setShowModal} position="flex-end">
          <MapForm
            closeModal={() => setShowModal(false)}
            location={tempMarker}
          />
        </Modal>
      )}
    </>
  );
};

export default Mapbox;
