import React, { useState, useEffect, useMemo } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicGhpbGVhc3RoZWZvZ2ciLCJhIjoiY2trcndzeDFuMDFoNjJ2bXBxOGs4ajBsMSJ9.c3h4T5wf6LVhCSdt20zNfg";

const useMapbox = (mapRef: any) => {
  const [mapbox, setMapbox] = useState<any>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (mapRef.current) return; // initialize map only once
    const mapObj = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    mapRef.current = mapObj;
  }, [mapRef]);

  return mapbox;
};

export default useMapbox;
