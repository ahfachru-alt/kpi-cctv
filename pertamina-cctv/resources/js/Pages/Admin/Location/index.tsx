import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import { Button } from '@/Components/Admin/Button';

export default function AdminLocationIndex({ rooms, buildings, filters }: any) {
  return (
    <AdminLayout>
      <Head title="Location List" />
      <div className="flex items-center justify-between mb-4">
        <select className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" defaultValue={filters.building_id || ''} onChange={(e)=>router.visit(route('admin.location.index', { building_id: e.target.value }))}>
          <option value="">Semua Gedung</option>
          {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <Link href={route('admin.location.create')}><Button>Create Location</Button></Link>
      </div>
      <Table columns={["ID","Building","Room","Action"]}>
        {rooms.data.map((r: any) => (
          <tr key={r.id} className="border-t">
            <td className="px-3 py-2">{r.id}</td>
            <td className="px-3 py-2">{r.building?.name}</td>
            <td className="px-3 py-2">{r.name}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.location.edit', r.id)} className="mr-2"><Button variant="secondary">Edit</Button></Link>
              <Link as="button" method="delete" href={route('admin.location.destroy', r.id)}><Button variant="danger">Delete</Button></Link>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

