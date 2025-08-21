import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/Admin/Button';
import UserLayout from '@/Layouts/UserLayout';

export default function UserCctvIndex({ room, cctvs }: any) {
  return (
    <UserLayout>
      <Head title={`CCTV - ${room.name}`} />
      <div className="space-y-3">
        <div className="text-lg font-semibold">{room.name} • CCTV</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cctvs.map((c: any)=> (
            <div key={c.id} className="rounded-lg border p-4">
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs capitalize">Status: {c.status}</div>
              <Link href={route('cctv.live', c.id)}><Button className="mt-2 px-3 py-1">Live</Button></Link>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
}

