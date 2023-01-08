import { loadModules } from "esri-loader";
import { useEffect, useRef } from "react";

function Map() {
  let view;
  const MapElement = useRef(null);

  useEffect(() => {
    loadModules(["esri/views/MapView", "esri/Map", "esri/config"], {
      css: true,
    }).then(([MapView, Map, esriConfig]) => {
      //Map will be created here
      esriConfig.apiKey = "FBwl0cAS7xN1ML7lcqpR";
      const map = new Map({
        basemap: "national-geographic",
        portalItem: { id: "d7e8cd6ae3854af6b2ed3a34609b8165" },
      });

      view = new MapView({
        zoom: 14, //Zoom Level can be Between 0 to 23
        center: [-118.24, 34.05], //longitude, latitude
        container: MapElement.current,
        map: map, //map created above
      });
    });
  });

  return <div style={{ height: "100vh" }} ref={MapElement}></div>;
}
export default Map;
