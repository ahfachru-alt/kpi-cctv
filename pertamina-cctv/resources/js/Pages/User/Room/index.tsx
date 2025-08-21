import React from 'react';
import { Head, Link } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';

export default function UserRoomIndex({ building, rooms }: any) {
  return (
    <UserLayout>
      <Head title={`Rooms - ${building.name}`} />
      <div className="space-y-3">
        <div className="text-lg font-semibold">{building.name} • Rooms</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {rooms.map((r: any)=> (
            <Link key={r.id} href={route('user.room.cctvs', r.id)} className="rounded-xl bg-white p-4 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
              {r.name}
            </Link>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}

