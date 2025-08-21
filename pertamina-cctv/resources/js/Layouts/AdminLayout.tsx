import React, { PropsWithChildren } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ThemeSwitch from '@/Components/ThemeSwitch';
import Flash from '@/Components/Flash';
import Container from '@/Components/Container';
import { DashboardIcon, TableIcon, UsersIcon, MapIcon, LocationIcon, ContactIcon, BellIcon, ChatIcon, UserIcon } from '@/components/Icons';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white/95 ring-1 ring-gray-200 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="/images/Pertamina.png" className="h-10 w-10" />
          <div className="text-xs text-gray-500">PLATFORM</div>
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          <Link href={route('admin.dashboard')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><DashboardIcon className="h-4 w-4" /> <span>Dashboard</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Table</div>
          <Link href={route('admin.table.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><TableIcon className="h-4 w-4" /> <span>CCTV List</span></Link>
          <Link href={route('admin.table.create')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><TableIcon className="h-4 w-4" /> <span>Create CCTV</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">User</div>
          <Link href={route('admin.users.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><UsersIcon className="h-4 w-4" /> <span>User List</span></Link>
          <Link href={route('admin.users.create')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><UsersIcon className="h-4 w-4" /> <span>Create User</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Maps</div>
          <Link href={route('admin.maps.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><MapIcon className="h-4 w-4" /> <span>Maps List</span></Link>
          <Link href={route('admin.maps.create')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><MapIcon className="h-4 w-4" /> <span>Create Maps</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Location</div>
          <Link href={route('admin.location.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><LocationIcon className="h-4 w-4" /> <span>Location List</span></Link>
          <Link href={route('admin.location.create')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><LocationIcon className="h-4 w-4" /> <span>Create Location</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Contact</div>
          <Link href={route('admin.contact.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><ContactIcon className="h-4 w-4" /> <span>Contact List</span></Link>
          <Link href={route('admin.contact.create')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><ContactIcon className="h-4 w-4" /> <span>Create Contact</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Notification</div>
          <Link href={route('admin.notification.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><BellIcon className="h-4 w-4" /> <span>Notification</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Message</div>
          <Link href={route('admin.message.index')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><ChatIcon className="h-4 w-4" /> <span>Message</span></Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Theme</div>
          <ThemeSwitch />
          <div className="mt-2 text-[10px] uppercase text-gray-400">Profile</div>
          <Link href={route('profile.edit')} className="flex items-center gap-2 rounded px-3 py-2 hover:bg-gray-100"><UserIcon className="h-4 w-4" /> <span>Settings</span></Link>
        </nav>
      </aside>
      <main className="ml-64 p-6">
        <Container>
          <Flash />
          {children}
          <footer className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
            © Kilang Pertamina Internasional
          </footer>
        </Container>
      </main>
    </div>
  );
}

