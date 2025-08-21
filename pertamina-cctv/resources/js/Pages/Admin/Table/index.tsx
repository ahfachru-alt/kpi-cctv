import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';

export default function AdminCctvIndex({ cctvs, buildings, filters }: any) {
  const { delete: destroy } = useForm();
  return (
    <AdminLayout>
      <Head title="CCTV Table" />
      <div className="flex items-center justify-between mb-4">
        <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" defaultValue={filters.building_id || ''} onChange={(e)=>router.visit(route('admin.table.index', { building_id: e.target.value }))}>
          <option value="">Semua Gedung</option>
          {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <Link href={route('admin.table.create')}><PrimaryButton>Create CCTV</PrimaryButton></Link>
      </div>
      <Table columns={["ID","Name","Status","Building","Room","Action"]}>
        {cctvs.data.map((c: any) => (
          <tr key={c.id} className="border-t">
            <td className="px-3 py-2">{c.id}</td>
            <td className="px-3 py-2">{c.name}</td>
            <td className="px-3 py-2 capitalize">{c.status}</td>
            <td className="px-3 py-2">{c.building?.name}</td>
            <td className="px-3 py-2">{c.room?.name}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.table.edit', c.id)} className="mr-2"><SecondaryButton>Edit</SecondaryButton></Link>
              <DangerButton onClick={() => destroy(route('admin.table.destroy', c.id))}>Delete</DangerButton>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

