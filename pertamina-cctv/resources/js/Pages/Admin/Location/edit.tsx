import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

type FormData = { building_id: number|string; name: string };

export default function AdminLocationEdit({ room, buildings }: any) {
  const { data, setData, put, processing, errors } = useForm<FormData>({ building_id: room.building_id, name: room.name });
  const submit = (e: React.FormEvent) => { e.preventDefault(); put(route('admin.location.update', room.id)); };
  return (
    <AdminLayout>
      <Head title="Edit Location" />
      <form onSubmit={submit} className="max-w-lg space-y-3">
        <div>
          <label className="block text-sm">Building</label>
          <select className="w-full rounded border px-3 py-2" value={data.building_id} onChange={e=>setData('building_id', e.target.value)}>
            {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
          {errors.building_id && <div className="text-xs text-rose-600">{errors.building_id}</div>}
        </div>
        <div>
          <label className="block text-sm">Room Name</label>
          <input className="w-full rounded border px-3 py-2" value={data.name} onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600">{errors.name}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.location.index')} className="rounded border px-4 py-2">Cancel</Link>
          <button disabled={processing} className="rounded bg-indigo-600 text-white px-4 py-2">Update</button>
        </div>
      </form>
    </AdminLayout>
  );
}

