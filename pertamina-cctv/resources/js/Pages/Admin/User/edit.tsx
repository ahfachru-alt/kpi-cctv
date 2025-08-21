import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

type FormData = { name: string; email: string; password?: string; role: 'admin'|'user' };

export default function AdminUserEdit({ user }: any) {
  const { data, setData, put, processing, errors } = useForm<FormData>({ name: user.name, email: user.email, password: '', role: user.role });
  const submit = (e: React.FormEvent) => { e.preventDefault(); put(route('admin.users.update', user.id)); };
  return (
    <AdminLayout>
      <Head title="Edit User" />
      <form onSubmit={submit} className="max-w-lg space-y-3">
        <div>
          <label className="block text-sm">Name</label>
          <input className="w-full rounded border px-3 py-2" value={data.name} onChange={e=>setData('name', e.target.value)} />
          {errors.name && <div className="text-xs text-rose-600">{errors.name}</div>}
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" className="w-full rounded border px-3 py-2" value={data.email} onChange={e=>setData('email', e.target.value)} />
          {errors.email && <div className="text-xs text-rose-600">{errors.email}</div>}
        </div>
        <div>
          <label className="block text-sm">Password (optional)</label>
          <input type="password" className="w-full rounded border px-3 py-2" value={data.password} onChange={e=>setData('password', e.target.value)} />
          {errors.password && <div className="text-xs text-rose-600">{errors.password}</div>}
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select className="w-full rounded border px-3 py-2" value={data.role} onChange={e=>setData('role', e.target.value as any)}>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
          {errors.role && <div className="text-xs text-rose-600">{errors.role}</div>}
        </div>
        <div className="pt-2 flex gap-2">
          <Link href={route('admin.users.index')} className="rounded border px-4 py-2">Cancel</Link>
          <button disabled={processing} className="rounded bg-indigo-600 text-white px-4 py-2">Update</button>
        </div>
      </form>
    </AdminLayout>
  );
}

