import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Button } from '@/Components/Admin/Button';

type FormData = { building_id: number|string; name: string };

export default function AdminLocationCreate({ buildings }: any) {
  const { data, setData, post, processing, errors } = useForm<FormData>({ building_id: '', name: '' });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.location.store')); };
  return (
    <AdminLayout>
      <Head title="Create Location" />
      <form onSubmit={submit} className="max-w-lg space-y-4">
        <div>
          <InputLabel htmlFor="building_id" value="Building" />
          <select id="building_id" className="mt-1 block w-full rounded border px-3 py-2" value={data.building_id} onChange={e=>setData('building_id', e.target.value)}>
            <option value="">Pilih gedung</option>
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
          <Link href={route('admin.location.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Save</Button>
        </div>
      </form>
    </AdminLayout>
  );
}

