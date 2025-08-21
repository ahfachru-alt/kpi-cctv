import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

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
      <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Lat</th>
              <th className="px-3 py-2 text-left">Lng</th>
              <th className="px-3 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {buildings.data.map((b: any) => (
              <tr key={b.id} className="border-t">
                <td className="px-3 py-2">{b.id}</td>
                <td className="px-3 py-2">{b.name}</td>
                <td className="px-3 py-2">{b.latitude}</td>
                <td className="px-3 py-2">{b.longitude}</td>
                <td className="px-3 py-2 text-right">
                  <Link href={route('admin.maps.edit', b.id)} className="rounded bg-amber-500 text-white px-2 py-1 mr-2">Edit</Link>
                  <Link as="button" method="delete" href={route('admin.maps.destroy', b.id)} className="rounded bg-rose-600 text-white px-2 py-1">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

