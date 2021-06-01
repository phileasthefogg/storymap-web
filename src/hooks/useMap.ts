import { useState, useEffect, useMemo } from "react";
import L from "leaflet";

const useMap = () => {
  const [leaflet, setLeaflet] = useState<any>(null);
  useEffect(() => {
    const mapObj = L.map("memorymap", {
      center: [37.79488483598235, -122.40539269489221],
      zoom: 16,
      layers: [
        // L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        //   attribution:
        //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        // }),
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            attribution:
              '<a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoicGhpbGVhc3RoZWZvZ2ciLCJhIjoiY2trcndzeDFuMDFoNjJ2bXBxOGs4ajBsMSJ9.c3h4T5wf6LVhCSdt20zNfg",
          }
        ),
      ],
    });
    setLeaflet(mapObj);
  }, []);

  const addMarker = (e: any) => {
    const newMarker = L.marker(e);
    newMarker.bindPopup(createPopup());
    newMarker.addTo(leaflet);
  };

  const createPopup = () => {
    const newPopup = L.popup().setContent(
      "<p>Hello world!<br />This is a nice popup.</p>"
    );
    return newPopup;
  };

  return useMemo(() => ({ leaflet, addMarker }), [leaflet]);
};

export default useMap;
