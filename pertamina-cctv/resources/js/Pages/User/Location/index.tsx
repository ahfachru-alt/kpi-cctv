import React from 'react';
import { Head, Link } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';

export default function UserLocationIndex({ buildings }: any) {
  return (
    <UserLayout>
      <div className="p-1 space-y-3">
        <Head title="Location" />
        <div className="text-lg font-semibold">Gedung</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {buildings.map((b: any)=> (
            <Link key={b.id} href={route('user.location.rooms', b.id)} className="rounded-lg border p-4 hover:bg-gray-50">
              {b.name}
            </Link>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}

