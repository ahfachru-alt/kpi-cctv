import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function UserRoomIndex({ building, rooms }: any) {
  return (
    <div className="p-4 space-y-3">
      <Head title={`Rooms - ${building.name}`} />
      <div className="text-lg font-semibold">{building.name} • Rooms</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {rooms.map((r: any)=> (
          <Link key={r.id} href={route('user.room.cctvs', r.id)} className="rounded-lg border p-4 hover:bg-gray-50">
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

