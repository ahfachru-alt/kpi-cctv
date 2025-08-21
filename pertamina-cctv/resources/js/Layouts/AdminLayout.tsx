import React, { PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ThemeSwitch from '@/Components/ThemeSwitch';
import Flash from '@/Components/Flash';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white/95 ring-1 ring-gray-200 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="/images/Pertamina.png" className="h-10 w-10" />
          <div className="text-xs text-gray-500">PLATFORM</div>
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          <Link href={route('admin.dashboard')} className="rounded px-3 py-2 hover:bg-gray-100">Dashboard</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Table</div>
          <Link href={route('admin.table.index')} className="rounded px-3 py-2 hover:bg-gray-100">CCTV List</Link>
          <Link href={route('admin.table.create')} className="rounded px-3 py-2 hover:bg-gray-100">Create CCTV</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">User</div>
          <Link href={route('admin.users.index')} className="rounded px-3 py-2 hover:bg-gray-100">User List</Link>
          <Link href={route('admin.users.create')} className="rounded px-3 py-2 hover:bg-gray-100">Create User</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Maps</div>
          <Link href={route('admin.maps.index')} className="rounded px-3 py-2 hover:bg-gray-100">Maps List</Link>
          <Link href={route('admin.maps.create')} className="rounded px-3 py-2 hover:bg-gray-100">Create Maps</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Location</div>
          <Link href={route('admin.location.index')} className="rounded px-3 py-2 hover:bg-gray-100">Location List</Link>
          <Link href={route('admin.location.create')} className="rounded px-3 py-2 hover:bg-gray-100">Create Location</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Contact</div>
          <Link href={route('admin.contact.index')} className="rounded px-3 py-2 hover:bg-gray-100">Contact List</Link>
          <Link href={route('admin.contact.create')} className="rounded px-3 py-2 hover:bg-gray-100">Create Contact</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Notification</div>
          <Link href={route('admin.notification.index')} className="rounded px-3 py-2 hover:bg-gray-100">Notification</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Message</div>
          <Link href={route('admin.message.index')} className="rounded px-3 py-2 hover:bg-gray-100">Message</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Theme</div>
          <ThemeSwitch />
          <div className="mt-2 text-[10px] uppercase text-gray-400">Profile</div>
          <Link href={route('profile.edit')} className="rounded px-3 py-2 hover:bg-gray-100">Settings</Link>
        </nav>
      </aside>
      <main className="ml-64 p-6">
        <Flash />
        {children}
      </main>
    </div>
  );
}

