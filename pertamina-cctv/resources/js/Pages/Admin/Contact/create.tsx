import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/Admin/Button';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

type FormData = { name: string; email?: string; phone?: string; whatsapp?: string; address?: string };

export default function AdminContactCreate() {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', email: '', phone: '', whatsapp: '', address: '' });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.contact.store')); };
  return (
    <AdminLayout>
      <Head title="Create Contact" />
      <form onSubmit={submit} className="max-w-lg space-y-4">
        <div>
          <InputLabel htmlFor="name" value="Name" />
          <TextInput id="name" value={data.name} className="mt-1 block w-full" onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600 mt-1">{errors.name}</div>}
        </div>
        <div>
          <InputLabel htmlFor="email" value="Email" />
          <TextInput id="email" type="email" value={data.email} className="mt-1 block w-full" onChange={e=>setData('email', e.target.value)} />
          {errors.email && <div className="text-xs text-rose-600 mt-1">{errors.email}</div>}
        </div>
        <div>
          <InputLabel htmlFor="phone" value="Phone" />
          <TextInput id="phone" value={data.phone} className="mt-1 block w-full" onChange={e=>setData('phone', e.target.value)} />
          {errors.phone && <div className="text-xs text-rose-600 mt-1">{errors.phone}</div>}
        </div>
        <div>
          <InputLabel htmlFor="whatsapp" value="WhatsApp" />
          <TextInput id="whatsapp" value={data.whatsapp} className="mt-1 block w-full" onChange={e=>setData('whatsapp', e.target.value)} />
          {errors.whatsapp && <div className="text-xs text-rose-600 mt-1">{errors.whatsapp}</div>}
        </div>
        <div>
          <InputLabel htmlFor="address" value="Address" />
          <textarea id="address" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" value={data.address || ''} onChange={e=>setData('address', e.target.value)} />
          {errors.address && <div className="text-xs text-rose-600 mt-1">{errors.address}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.contact.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Save</Button>
        </div>
      </form>
    </AdminLayout>
  );
}

