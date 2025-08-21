import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';

export default function AdminLocationIndex({ rooms, buildings, filters }: any) {
  const { delete: destroy } = useForm();
  return (
    <AdminLayout>
      <Head title="Location List" />
      <div className="flex items-center justify-between mb-4">
        <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" defaultValue={filters.building_id || ''} onChange={(e)=>router.visit(route('admin.location.index', { building_id: e.target.value }))}>
          <option value="">Semua Gedung</option>
          {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <Link href={route('admin.location.create')}><PrimaryButton>Create Location</PrimaryButton></Link>
      </div>
      <Table columns={["ID","Building","Room","Action"]}>
        {rooms.data.map((r: any) => (
          <tr key={r.id} className="border-t">
            <td className="px-3 py-2">{r.id}</td>
            <td className="px-3 py-2">{r.building?.name}</td>
            <td className="px-3 py-2">{r.name}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.location.edit', r.id)} className="mr-2"><SecondaryButton>Edit</SecondaryButton></Link>
              <DangerButton onClick={() => destroy(route('admin.location.destroy', r.id))}>Delete</DangerButton>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

