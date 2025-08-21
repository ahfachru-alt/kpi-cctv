import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/Admin/Button';

type FormData = { name: string; ip: string; status: 'online'|'offline'|'maintenance'; building_id: number|string; room_id?: number|string; latitude?: number; longitude?: number };

export default function AdminCctvCreate({ buildings, rooms }: any) {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', ip: '', status: 'online', building_id: '', room_id: '', latitude: undefined, longitude: undefined });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.table.store')); };
  return (
    <AdminLayout>
      <Head title="Create CCTV" />
      <form onSubmit={submit} className="max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <InputLabel htmlFor="name" value="Name" />
            <TextInput id="name" value={data.name} className="mt-1 block w-full" onChange={e=>setData('name', e.target.value)} />
            {errors.name && <div className="text-xs text-rose-600 mt-1">{errors.name}</div>}
          </div>
          <div>
            <InputLabel htmlFor="ip" value="RTSP IP" />
            <TextInput id="ip" value={data.ip} className="mt-1 block w-full" onChange={e=>setData('ip', e.target.value)} />
            {errors.ip && <div className="text-xs text-rose-600 mt-1">{errors.ip}</div>}
          </div>
          <div>
            <InputLabel htmlFor="status" value="Status" />
            <select id="status" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" value={data.status} onChange={e=>setData('status', e.target.value as any)}>
              <option value="online">online</option>
              <option value="offline">offline</option>
              <option value="maintenance">maintenance</option>
            </select>
            {errors.status && <div className="text-xs text-rose-600 mt-1">{errors.status}</div>}
          </div>
          <div>
            <InputLabel htmlFor="building_id" value="Building" />
            <select id="building_id" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" value={data.building_id} onChange={e=>setData('building_id', e.target.value)}>
              <option value="">Pilih gedung</option>
              {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
            {errors.building_id && <div className="text-xs text-rose-600 mt-1">{errors.building_id}</div>}
          </div>
          <div>
            <InputLabel htmlFor="room_id" value="Room" />
            <select id="room_id" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" value={data.room_id as any} onChange={e=>setData('room_id', e.target.value)}>
              <option value="">(optional)</option>
              {rooms.map((r: any)=> <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
            {errors.room_id && <div className="text-xs text-rose-600 mt-1">{errors.room_id}</div>}
          </div>
          <div>
            <InputLabel htmlFor="latitude" value="Latitude" />
            <TextInput id="latitude" type="number" step="any" value={(data.latitude as any) ?? ''} className="mt-1 block w-full" onChange={e=>setData('latitude', e.target.value ? Number(e.target.value) : undefined)} />
            {errors.latitude && <div className="text-xs text-rose-600 mt-1">{errors.latitude}</div>}
          </div>
          <div>
            <InputLabel htmlFor="longitude" value="Longitude" />
            <TextInput id="longitude" type="number" step="any" value={(data.longitude as any) ?? ''} className="mt-1 block w-full" onChange={e=>setData('longitude', e.target.value ? Number(e.target.value) : undefined)} />
            {errors.longitude && <div className="text-xs text-rose-600 mt-1">{errors.longitude}</div>}
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.table.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Save</Button>
        </div>
      </form>
    </AdminLayout>
  );
}

