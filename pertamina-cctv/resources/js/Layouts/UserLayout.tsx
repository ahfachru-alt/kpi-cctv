import React, { PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';
import ThemeSwitch from '@/Components/ThemeSwitch';
import Flash from '@/Components/Flash';
import Container from '@/Components/Container';

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <aside className="fixed inset-y-0 left-0 w-64 bg-white/95 ring-1 ring-gray-200 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-2">
          <img src="/images/Pertamina.png" className="h-10 w-10" />
          <div className="text-xs text-gray-500">PLATFORM</div>
        </div>
        <nav className="flex flex-col gap-1 text-sm">
          <Link href={route('user.dashboard')} className="rounded px-3 py-2 hover:bg-gray-100">Dashboard</Link>
          <Link href={route('user.maps')} className="rounded px-3 py-2 hover:bg-gray-100">Maps</Link>
          <Link href={route('user.location.index')} className="rounded px-3 py-2 hover:bg-gray-100">Location</Link>
          <Link href={route('user.contact')} className="rounded px-3 py-2 hover:bg-gray-100">Contact</Link>
          <div className="mt-2 text-[10px] uppercase text-gray-400">Theme</div>
          <ThemeSwitch />
          <div className="mt-2 text-[10px] uppercase text-gray-400">Profile</div>
          <Link href={route('profile.edit')} className="rounded px-3 py-2 hover:bg-gray-100">Settings</Link>
        </nav>
      </aside>
      <main className="ml-64 p-6">
        <Container>
          <Flash />
          {children}
        </Container>
      </main>
    </div>
  );
}

