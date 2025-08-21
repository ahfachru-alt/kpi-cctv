import React, { useEffect, useMemo, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';

type Building = { id: number; name: string; latitude: number; longitude: number };
type Cctv = { id: number; name: string; status: 'online'|'offline'|'maintenance'; latitude: number; longitude: number; building_id: number; room_id?: number };

const statusColors: Record<Cctv['status'], string> = {
  online: '#10b981',
  offline: '#ef4444',
  maintenance: '#f59e0b',
};

function makeCircleIcon(color: string) {
  return L.divIcon({
    className: 'cctv-icon',
    html: `<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${color};box-shadow:0 0 0 2px #fff;">&nbsp;</span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

import UserLayout from '@/Layouts/UserLayout';
import { Button } from '@/Components/Admin/Button';

export default function UserMaps() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [cctvs, setCctvs] = useState<Cctv[]>([]);
  const [filter, setFilter] = useState<{online:boolean; offline:boolean; maintenance:boolean}>({ online: true, offline: true, maintenance: true });
  const center: [number, number] = [-6.35, 108.4];

  useEffect(() => {
    fetch('/api/buildings', { credentials: 'same-origin' })
      .then(r => r.json())
      .then(setBuildings)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const statuses: string[] = [];
    if (filter.online) statuses.push('online');
    if (filter.offline) statuses.push('offline');
    if (filter.maintenance) statuses.push('maintenance');
    const qs = new URLSearchParams();
    if (statuses.length) qs.set('status', statuses.join(','));
    fetch(`/api/cctvs?${qs.toString()}`, { credentials: 'same-origin' })
      .then(r => r.json())
      .then(setCctvs)
      .catch(() => {});
  }, [filter]);

  return (
    <UserLayout>
      <Head title="Maps" />
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filter:</span>
          {(['online','offline','maintenance'] as const).map(s => (
            <label key={s} className="inline-flex items-center gap-1 text-sm">
              <input type="checkbox" checked={filter[s]} onChange={(e) => setFilter({ ...filter, [s]: e.target.checked })} />
              <span className="inline-block size-3 rounded-full" style={{ background: statusColors[s] }} />
              <span className="capitalize">{s}</span>
            </label>
          ))}
        </div>

        <div className="h-[70vh] w-full overflow-hidden rounded-lg ring-1 ring-gray-200">
          <MapContainer center={center} zoom={14} className="h-full w-full">
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Satellite (ESRI)">
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Tiles &copy; Esri" />
              </LayersControl.BaseLayer>
            </LayersControl>

            {cctvs.map(cam => (
              cam.latitude && cam.longitude ? (
                <Marker key={cam.id} position={[cam.latitude, cam.longitude]} icon={makeCircleIcon(statusColors[cam.status])}>
                  <Popup>
                    <div className="space-y-1">
                      <div className="font-semibold">{cam.name}</div>
                      <div className="text-xs">Status: <span className="capitalize">{cam.status}</span></div>
                      <div className="mt-1">
                        <a href={`/cctv/${cam.id}/live`}><Button className="px-2 py-1 text-xs">Live</Button></a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ) : null
            ))}
          </MapContainer>
        </div>
      </div>
    </UserLayout>
  );
}

