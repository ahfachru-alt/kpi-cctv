import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function AdminUserIndex({ users, stats, filters }: any) {
  const { delete: destroy } = useForm();
  return (
    <AdminLayout>
      <Head title="User List" />
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 text-sm">
          <span className="rounded bg-emerald-100 text-emerald-700 px-3 py-1">Online: {stats.online}</span>
          <span className="rounded bg-rose-100 text-rose-700 px-3 py-1">Offline: {stats.offline}</span>
        </div>
        <Link href={route('admin.users.create')} className="rounded bg-indigo-600 text-white px-3 py-2">Create User</Link>
      </div>
      <div className="mb-3">
        <input
          type="text"
          defaultValue={filters.q}
          placeholder="Cari nama/email..."
          className="w-full max-w-sm rounded border px-3 py-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              router.visit(route('admin.users.index', { q: (e.target as HTMLInputElement).value }));
            }
          }}
        />
      </div>
      <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Role</th>
              <th className="px-3 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((u: any) => (
              <tr key={u.id} className="border-t">
                <td className="px-3 py-2">{u.id}</td>
                <td className="px-3 py-2">{u.name}</td>
                <td className="px-3 py-2">{u.email}</td>
                <td className="px-3 py-2 capitalize">{u.role}</td>
                <td className="px-3 py-2 text-right">
                  <Link href={route('admin.users.edit', u.id)} className="rounded bg-amber-500 text-white px-2 py-1 mr-2">Edit</Link>
                  <button
                    className="rounded bg-rose-600 text-white px-2 py-1"
                    onClick={() => destroy(route('admin.users.destroy', u.id))}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-xs text-gray-500">Page {users.current_page} / {users.last_page}</div>
    </AdminLayout>
  );
}

