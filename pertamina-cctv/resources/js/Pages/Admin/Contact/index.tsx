import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function AdminContactIndex({ contacts, filters }: any) {
  return (
    <AdminLayout>
      <Head title="Contact List" />
      <div className="flex items-center justify-between mb-4">
        <input
          className="rounded border px-3 py-2"
          defaultValue={filters.q}
          placeholder="Cari kontak..."
          onKeyDown={(e) => { if (e.key === 'Enter') router.visit(route('admin.contact.index', { q: (e.target as HTMLInputElement).value })); }}
        />
        <Link href={route('admin.contact.create')} className="rounded bg-indigo-600 text-white px-3 py-2">Create Contact</Link>
      </div>
      <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">ID</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Phone</th>
              <th className="px-3 py-2 text-left">WhatsApp</th>
              <th className="px-3 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.data.map((c: any) => (
              <tr key={c.id} className="border-t">
                <td className="px-3 py-2">{c.id}</td>
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2">{c.phone}</td>
                <td className="px-3 py-2">{c.whatsapp}</td>
                <td className="px-3 py-2 text-right">
                  <Link href={route('admin.contact.edit', c.id)} className="rounded bg-amber-500 text-white px-2 py-1 mr-2">Edit</Link>
                  <Link as="button" method="delete" href={route('admin.contact.destroy', c.id)} className="rounded bg-rose-600 text-white px-2 py-1">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

