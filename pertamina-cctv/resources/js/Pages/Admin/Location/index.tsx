import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function AdminLocationIndex({ rooms, buildings, filters }: any) {
  return (
    <AdminLayout>
      <Head title="Location List" />
      <div className="flex items-center justify-between mb-4">
        <select className="rounded border px-3 py-2" defaultValue={filters.building_id || ''} onChange={(e)=>router.visit(route('admin.location.index', { building_id: e.target.value }))}>
          <option value="">Semua Gedung</option>
          {buildings.map((b: any)=> <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <Link href={route('admin.location.create')} className="rounded bg-indigo-600 text-white px-3 py-2">Create Location</Link>
      </div>
      <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Building</th>
              <th className="px-3 py-2 text-left">Room</th>
              <th className="px-3 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.data.map((r: any) => (
              <tr key={r.id} className="border-t">
                <td className="px-3 py-2">{r.id}</td>
                <td className="px-3 py-2">{r.building?.name}</td>
                <td className="px-3 py-2">{r.name}</td>
                <td className="px-3 py-2 text-right">
                  <Link href={route('admin.location.edit', r.id)} className="rounded bg-amber-500 text-white px-2 py-1 mr-2">Edit</Link>
                  <Link as="button" method="delete" href={route('admin.location.destroy', r.id)} className="rounded bg-rose-600 text-white px-2 py-1">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

