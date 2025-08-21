import React from 'react';
import { Head, Link } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';

export default function UserDashboard() {
  return (
    <UserLayout>
      <Head title="User Dashboard" />
      <div className="space-y-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href={route('user.maps')} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:bg-gray-50">Maps</Link>
          <Link href={route('user.location.index')} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:bg-gray-50">Location</Link>
          <Link href={route('user.contact')} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 hover:bg-gray-50">Contact</Link>
        </div>
      </div>
    </UserLayout>
  );
}

