import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

type FormData = { name: string; latitude?: number; longitude?: number };

export default function AdminMapsCreate() {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', latitude: undefined, longitude: undefined });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.maps.store')); };
  return (
    <AdminLayout>
      <Head title="Create Maps" />
      <form onSubmit={submit} className="max-w-lg space-y-3">
        <div>
          <label className="block text-sm">Name</label>
          <input className="w-full rounded border px-3 py-2" value={data.name} onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600">{errors.name}</div>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm">Latitude</label>
            <input type="number" step="any" className="w-full rounded border px-3 py-2" value={data.latitude ?? ''} onChange={e=>setData('latitude', e.target.value ? Number(e.target.value) : undefined)} />
            {errors.latitude && <div className="text-xs text-rose-600">{errors.latitude}</div>}
          </div>
          <div>
            <label className="block text-sm">Longitude</label>
            <input type="number" step="any" className="w-full rounded border px-3 py-2" value={data.longitude ?? ''} onChange={e=>setData('longitude', e.target.value ? Number(e.target.value) : undefined)} />
            {errors.longitude && <div className="text-xs text-rose-600">{errors.longitude}</div>}
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.maps.index')} className="rounded border px-4 py-2">Cancel</Link>
          <button disabled={processing} className="rounded bg-indigo-600 text-white px-4 py-2">Save</button>
        </div>
      </form>
    </AdminLayout>
  );
}

