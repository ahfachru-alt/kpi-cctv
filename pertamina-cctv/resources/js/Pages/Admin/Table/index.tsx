import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import { Button } from '@/Components/Admin/Button';

export default function AdminCctvIndex({ cctvs, buildings, filters }: any) {
  return (
    <AdminLayout>
      <Head title="CCTV Table" />
      <div className="flex items-center justify-between mb-4">
        <select className="rounded border px-3 py-2" defaultValue={filters.building_id || ''} onChange={(e)=>router.visit(route('admin.table.index', { building_id: e.target.value }))}>
          <option value="">Semua Gedung</option>
          {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <Link href={route('admin.table.create')}><Button>Create CCTV</Button></Link>
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
              <Link href={route('admin.table.edit', c.id)} className="mr-2"><Button variant="secondary">Edit</Button></Link>
              <Link as="button" method="delete" href={route('admin.table.destroy', c.id)}><Button variant="danger">Delete</Button></Link>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

