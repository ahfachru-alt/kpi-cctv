import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Button } from '@/Components/Admin/Button';

type FormData = { name: string; email: string; password?: string; role: 'admin'|'user' };

export default function AdminUserEdit({ user }: any) {
  const { data, setData, put, processing, errors } = useForm<FormData>({ name: user.name, email: user.email, password: '', role: user.role });
  const submit = (e: React.FormEvent) => { e.preventDefault(); put(route('admin.users.update', user.id)); };
  return (
    <AdminLayout>
      <Head title="Edit User" />
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
          <InputLabel htmlFor="password" value="Password (optional)" />
          <TextInput id="password" type="password" value={data.password} className="mt-1 block w-full" onChange={e=>setData('password', e.target.value)} />
          {errors.password && <div className="text-xs text-rose-600 mt-1">{errors.password}</div>}
        </div>
        <div>
          <InputLabel htmlFor="role" value="Role" />
          <select id="role" className="mt-1 block w-full rounded border px-3 py-2" value={data.role} onChange={e=>setData('role', e.target.value as any)}>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          {errors.role && <div className="text-xs text-rose-600 mt-1">{errors.role}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.users.index')}><Button variant="secondary">Cancel</Button></Link>
          <Button disabled={processing}>Update</Button>
        </div>
      </form>
    </AdminLayout>
  );
}

