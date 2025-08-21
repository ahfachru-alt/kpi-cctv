import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import { Button } from '@/Components/Admin/Button';

export default function AdminMapsIndex({ buildings, filters }: any) {
  return (
    <AdminLayout>
      <Head title="Maps List" />
      <div className="flex items-center justify-between mb-4">
        <input
          className="rounded border px-3 py-2"
          defaultValue={filters.q}
          placeholder="Cari gedung..."
          onKeyDown={(e) => { if (e.key === 'Enter') router.visit(route('admin.maps.index', { q: (e.target as HTMLInputElement).value })); }}
        />
        <Link href={route('admin.maps.create')} className="rounded bg-indigo-600 text-white px-3 py-2">Create Maps</Link>
      </div>
      <Table columns={["ID","Name","Lat","Lng","Action"]}>
        {buildings.data.map((b: any) => (
          <tr key={b.id} className="border-t">
            <td className="px-3 py-2">{b.id}</td>
            <td className="px-3 py-2">{b.name}</td>
            <td className="px-3 py-2">{b.latitude}</td>
            <td className="px-3 py-2">{b.longitude}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.maps.edit', b.id)} className="mr-2"><Button variant="secondary">Edit</Button></Link>
              <Link as="button" method="delete" href={route('admin.maps.destroy', b.id)}><Button variant="danger">Delete</Button></Link>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

