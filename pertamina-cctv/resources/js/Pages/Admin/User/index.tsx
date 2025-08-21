import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { Card } from '@/Components/Admin/Card';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { Table } from '@/Components/Admin/Table';

export default function AdminUserIndex({ users, stats, filters }: any) {
  const { delete: destroy } = useForm();
  return (
    <AdminLayout>
      <Head title="User List" />
      <div className="flex items-center justify-between mb-4">
        <Card className="flex gap-3">
          <span className="rounded bg-emerald-100 text-emerald-700 px-3 py-1">Online: {stats.online}</span>
          <span className="rounded bg-rose-100 text-rose-700 px-3 py-1">Offline: {stats.offline}</span>
        </Card>
        <Link href={route('admin.users.create')}><PrimaryButton>Create User</PrimaryButton></Link>
      </div>
      <div className="mb-3">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            defaultValue={filters.q}
            placeholder="Cari nama/email..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                router.visit(route('admin.users.index', { q: (e.target as HTMLInputElement).value }));
              }
            }}
          />
        </div>
      </div>
      <Table columns={["ID","Name","Email","Role","Action"]}>
        {users.data.map((u: any) => (
          <tr key={u.id} className="border-t">
            <td className="px-3 py-2">{u.id}</td>
            <td className="px-3 py-2">{u.name}</td>
            <td className="px-3 py-2">{u.email}</td>
            <td className="px-3 py-2 capitalize">{u.role}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.users.edit', u.id)} className="mr-2"><SecondaryButton>Edit</SecondaryButton></Link>
              <SecondaryButton onClick={() => destroy(route('admin.users.destroy', u.id))}>Delete</SecondaryButton>
            </td>
          </tr>
        ))}
      </Table>
      <div className="mt-3 text-xs text-gray-500">Page {users.current_page} / {users.last_page}</div>
    </AdminLayout>
  );
}

