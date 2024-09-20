import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

interface MapProps {
  lat: number;
  long: number;  
}

const MyMapComponent: React.FC<MapProps> = ({ lat, long }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapRefInstance = useRef<Map | null>(null); 

  useEffect(() => {
    if (mapRef.current) {
      if (!mapRefInstance.current) {
        mapRefInstance.current = new Map({
          target: mapRef.current,
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          view: new View({
            center: fromLonLat([long, lat]),
            zoom: 13,
          }),
        });
      } else {
        mapRefInstance.current.setView(new View({
          center: fromLonLat([long, lat]),
          zoom: 13,
        }));
      }
    }

    return () => {
      if (mapRefInstance.current) {
        mapRefInstance.current.setTarget(undefined); 
        mapRefInstance.current = null; 
      }
    };
  }, [lat, long]);

  return <div ref={mapRef} style={{ height: '300px', width: '100%' }} />;
};

export default MyMapComponent;
