import React from 'react';
import { Head, Link } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';

export default function UserLocationIndex({ buildings }: any) {
  return (
    <UserLayout>
      <Head title="Location" />
      <div className="space-y-3">
        <div className="text-lg font-semibold">Gedung</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {buildings.map((b: any)=> (
            <Link key={b.id} href={route('user.location.rooms', b.id)} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
              {b.name}
            </Link>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}

