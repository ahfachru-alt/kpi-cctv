import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/Admin/Button';

type FormData = { name: string; latitude?: number; longitude?: number };

export default function AdminMapsCreate() {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', latitude: undefined, longitude: undefined });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.maps.store')); };
  return (
    <AdminLayout>
      <Head title="Create Maps" />
      <form onSubmit={submit} className="max-w-lg space-y-4">
        <div>
          <InputLabel htmlFor="name" value="Name" />
          <TextInput id="name" value={data.name} className="mt-1 block w-full" onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600 mt-1">{errors.name}</div>}
        </div>
        <div className="grid grid-cols-2 gap-3">
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
          <Link href={route('admin.maps.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Save</Button>
        </div>
      </form>
    </AdminLayout>
  );
}

