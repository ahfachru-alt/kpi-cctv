import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Field, Actions } from '@/Components/Admin/Form';
import { Button } from '@/Components/Admin/Button';

type FormData = { name: string; email?: string; phone?: string; whatsapp?: string; address?: string };

export default function AdminContactCreate() {
  const { data, setData, post, processing, errors } = useForm<FormData>({ name: '', email: '', phone: '', whatsapp: '', address: '' });
  const submit = (e: React.FormEvent) => { e.preventDefault(); post(route('admin.contact.store')); };
  return (
    <AdminLayout>
      <Head title="Create Contact" />
      <form onSubmit={submit} className="max-w-lg space-y-3">
        {(['name','email','phone','whatsapp'] as const).map((f)=> (
          <Field key={f} label={f.toUpperCase()} error={(errors as any)[f]}>
            <input className="w-full rounded border px-3 py-2" value={(data as any)[f] || ''} onChange={e=>setData(f as any, e.target.value)} />
          </Field>
        ))}
        <Field label="Address" error={errors.address}>
          <textarea className="w-full rounded border px-3 py-2" value={data.address || ''} onChange={e=>setData('address', e.target.value)} />
        </Field>
        <Actions>
          <Link href={route('admin.contact.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Save</Button>
        </Actions>
      </form>
    </AdminLayout>
  );
}

