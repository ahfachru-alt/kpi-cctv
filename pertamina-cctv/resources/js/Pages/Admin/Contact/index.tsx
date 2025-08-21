import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import { Button } from '@/Components/Admin/Button';

export default function AdminContactIndex({ contacts, filters }: any) {
  return (
    <AdminLayout>
      <Head title="Contact List" />
      <div className="flex items-center justify-between mb-4">
        <input
          className="rounded border px-3 py-2"
          defaultValue={filters?.q || ''}
          placeholder="Cari kontak..."
          onKeyDown={(e) => { if (e.key === 'Enter') router.visit(route('admin.contact.index', { q: (e.target as HTMLInputElement).value })); }}
        />
        <Link href={route('admin.contact.create')} className="rounded bg-indigo-600 text-white px-3 py-2">Create Contact</Link>
      </div>
      <Table columns={["ID","Name","Email","Phone","WhatsApp","Action"]}>
        {contacts.data.map((c: any) => (
          <tr key={c.id} className="border-t">
            <td className="px-3 py-2">{c.id}</td>
            <td className="px-3 py-2">{c.name}</td>
            <td className="px-3 py-2">{c.email}</td>
            <td className="px-3 py-2">{c.phone}</td>
            <td className="px-3 py-2">{c.whatsapp}</td>
            <td className="px-3 py-2 text-right">
              <Link href={route('admin.contact.edit', c.id)} className="mr-2"><Button variant="secondary">Edit</Button></Link>
              <Link as="button" method="delete" href={route('admin.contact.destroy', c.id)}><Button variant="danger">Delete</Button></Link>
            </td>
          </tr>
        ))}
      </Table>
    </AdminLayout>
  );
}

