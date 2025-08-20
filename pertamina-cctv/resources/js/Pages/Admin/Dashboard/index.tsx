import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

type Stats = { usersOnline: number; usersOffline: number; buildings: number; rooms: number; cctvOnline: number; cctvOffline: number; cctvMaintenance: number };

export default function AdminDashboard({ stats }: { stats: Stats }) {
  return (
    <AdminLayout>
      <Head title="Admin Dashboard" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Users Online', value: stats.usersOnline, color: 'bg-emerald-100 text-emerald-700' },
          { label: 'Users Offline', value: stats.usersOffline, color: 'bg-rose-100 text-rose-700' },
          { label: 'Buildings', value: stats.buildings, color: 'bg-indigo-100 text-indigo-700' },
          { label: 'Rooms', value: stats.rooms, color: 'bg-violet-100 text-violet-700' },
          { label: 'CCTV Online', value: stats.cctvOnline, color: 'bg-emerald-100 text-emerald-700' },
          { label: 'CCTV Offline', value: stats.cctvOffline, color: 'bg-rose-100 text-rose-700' },
          { label: 'CCTV Maintenance', value: stats.cctvMaintenance, color: 'bg-amber-100 text-amber-700' },
        ].map((c) => (
          <div key={c.label} className={`rounded-xl p-4 ring-1 ring-black/5 ${c.color}`}>
            <div className="text-xs">{c.label}</div>
            <div className="text-3xl font-bold">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <Link href={route('admin.export.cctvs')} className="rounded-md bg-emerald-600 px-4 py-2 text-white">Download CCTV (Excel)</Link>
      </div>
    </AdminLayout>
  );
}

