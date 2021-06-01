import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { ILocation } from "../../models/locations";
import MarkerIcon from "../icons/MarkerIcon";

interface IMapMarker {
  longitude: number;
  latitude: number;
  popup?: React.ReactElement | HTMLElement;
  fill?: string;
  draggable?: boolean;
  onDragEnd?: (e: any) => void;
  location?: ILocation;
  showClose?: boolean;
}

const MapMarker = ({
  location,
  popup,
  longitude,
  latitude,
  fill,
  draggable = false,
  onDragEnd,
  showClose = true,
}: IMapMarker) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <>
      {showPopup ? (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offsetTop={-20}
          offsetLeft={6}
          closeOnClick={false}
          closeButton={showClose}
          onClose={() => setShowPopup(false)}
        >
          {popup ? popup : <div>This is your popup</div>}
        </Popup>
      ) : null}
      <Marker
        offsetLeft={-10}
        offsetTop={-20}
        latitude={latitude}
        longitude={longitude}
        captureClick={true}
        draggable={draggable}
        onDragEnd={onDragEnd}
      >
        <MarkerIcon onClick={() => setShowPopup((s) => !s)} fill={fill} />
      </Marker>
    </>
  );
};

export default MapMarker;
