import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function UserCctvIndex({ room, cctvs }: any) {
  return (
    <div className="p-4 space-y-3">
      <Head title={`CCTV - ${room.name}`} />
      <div className="text-lg font-semibold">{room.name} • CCTV</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {cctvs.map((c: any)=> (
          <div key={c.id} className="rounded-lg border p-4">
            <div className="font-semibold">{c.name}</div>
            <div className="text-xs capitalize">Status: {c.status}</div>
            <Link href={route('cctv.live', c.id)} className="mt-2 inline-flex rounded bg-indigo-600 px-3 py-1 text-white">Live</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

