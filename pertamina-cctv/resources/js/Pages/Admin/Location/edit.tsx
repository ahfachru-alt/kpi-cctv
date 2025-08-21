import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

type FormData = { building_id: number|string; name: string };

export default function AdminLocationEdit({ room, buildings }: any) {
  const { data, setData, put, processing, errors } = useForm<FormData>({ building_id: room.building_id, name: room.name });
  const submit = (e: React.FormEvent) => { e.preventDefault(); put(route('admin.location.update', room.id)); };
  return (
    <AdminLayout>
      <Head title="Edit Location" />
      <form onSubmit={submit} className="max-w-lg space-y-4">
        <div>
          <InputLabel htmlFor="building_id" value="Building" />
          <select id="building_id" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" value={data.building_id} onChange={e=>setData('building_id', e.target.value)}>
            {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
          {errors.building_id && <div className="text-xs text-rose-600 mt-1">{errors.building_id}</div>}
        </div>
        <div>
          <InputLabel htmlFor="name" value="Room Name" />
          <TextInput id="name" value={data.name} className="mt-1 block w-full" onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600 mt-1">{errors.name}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.location.index')}><SecondaryButton>Cancel</SecondaryButton></Link>
          <PrimaryButton disabled={processing}>Update</PrimaryButton>
        </div>
      </form>
    </AdminLayout>
  );
}

