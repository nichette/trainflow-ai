import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Train, Station } from '@/data'; // Adjust paths
import { useState, useEffect } from 'react';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png', iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png' });

export const TrainMap = ({ trains, stations }: { trains: Train[]; stations: Station[] }) => {
  const [liveTrains, setLiveTrains] = useState(trains);
  useEffect(() => {
    const int = setInterval(() => setLiveTrains(t => t.map(tr => ({...tr, pos: (tr.pos + tr.speed/1000) % 5, delay: Math.random()>0.9 ? Math.random()*5 : tr.delay }))), 1500);
    return () => clearInterval(int);
  }, []);
  return (
    <MapContainer center={[25,75]} zoom={5} style={{height: '400px', borderRadius: '8px'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stations.map(s => <Marker key={s.id} position={[s.lat, s.lng]}><Popup>{s.name}</Popup></Marker>)}
      {liveTrains.map(t => {
        const st = stations[Math.floor(t.pos) % 5];
        return <Marker key={t.id} position={[st.lat, st.lng]}><Popup>{t.id}: {t.type}, Delay: {t.delay?.toFixed(1) || 0} min</Popup></Marker>;
      })}
    </MapContainer>
  );
};
