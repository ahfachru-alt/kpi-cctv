import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Table } from '@/Components/Admin/Table';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function AdminContactIndex({ contacts, filters }: any) {
	return (
		<AdminLayout>
			<Head title="Contact List" />
			<div className="flex items-center justify-between mb-4">
				<input
					className="rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
					defaultValue={filters?.q || ''}
					placeholder="Cari kontak..."
					onKeyDown={(e) => { if (e.key === 'Enter') router.visit(route('admin.contact.index', { q: (e.target as HTMLInputElement).value })); }}
				/>
				<Link href={route('admin.contact.create')}><PrimaryButton>Create Contact</PrimaryButton></Link>
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
							<Link href={route('admin.contact.edit', c.id)} className="mr-2"><SecondaryButton>Edit</SecondaryButton></Link>
							<Link as="button" method="delete" href={route('admin.contact.destroy', c.id)}><SecondaryButton>Delete</SecondaryButton></Link>
						</td>
					</tr>
				))}
			</Table>
		</AdminLayout>
	);
}