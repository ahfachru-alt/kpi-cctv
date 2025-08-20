import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

type FormData = { name: string; email?: string; phone?: string; whatsapp?: string; address?: string };

export default function AdminContactCreate() {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', email: '', phone: '', whatsapp: '', address: '' });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.contact.store')); };
  return (
    <AdminLayout>
      <Head title="Create Contact" />
      <form onSubmit={submit} className="max-w-lg space-y-3">
        {['name','email','phone','whatsapp'].map((f)=> (
          <div key={f}>
            <label className="block text-sm capitalize">{f}</label>
            <input className="w-full rounded border px-3 py-2" value={(data as any)[f] || ''} onChange={e=>setData(f as any, e.target.value)} />
            {(errors as any)[f] && <div className="text-xs text-rose-600">{(errors as any)[f]}</div>}
          </div>
        ))}
        <div>
          <label className="block text-sm">Address</label>
          <textarea className="w-full rounded border px-3 py-2" value={data.address || ''} onChange={e=>setData('address', e.target.value)} />
          {errors.address && <div className="text-xs text-rose-600">{errors.address}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.contact.index')} className="rounded border px-4 py-2">Cancel</Link>
          <button disabled={processing} className="rounded bg-indigo-600 text-white px-4 py-2">Save</button>
        </div>
      </form>
    </AdminLayout>
  );
}

