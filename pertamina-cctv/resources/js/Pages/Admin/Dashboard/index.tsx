import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Card } from '@/Components/Admin/Card';
import { Button } from '@/Components/Admin/Button';

type Stats = { usersOnline: number; usersOffline: number; buildings: number; rooms: number; cctvOnline: number; cctvOffline: number; cctvMaintenance: number };

export default function AdminDashboard({ stats }: { stats: Stats }) {
  const tiles = [
    { label: 'Users Online', value: stats.usersOnline, color: 'bg-emerald-100 text-emerald-700' },
    { label: 'Users Offline', value: stats.usersOffline, color: 'bg-rose-100 text-rose-700' },
    { label: 'Buildings', value: stats.buildings, color: 'bg-indigo-100 text-indigo-700' },
    { label: 'Rooms', value: stats.rooms, color: 'bg-violet-100 text-violet-700' },
    { label: 'CCTV Online', value: stats.cctvOnline, color: 'bg-emerald-100 text-emerald-700' },
    { label: 'CCTV Offline', value: stats.cctvOffline, color: 'bg-rose-100 text-rose-700' },
    { label: 'CCTV Maintenance', value: stats.cctvMaintenance, color: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <AdminLayout>
      <Head title="Admin Dashboard" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tiles.map((c) => (
          <Card key={c.label} className={`${c.color}`}>
            <div className="text-xs">{c.label}</div>
            <div className="text-3xl font-bold">{c.value}</div>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Link href={route('admin.export.cctvs')}><Button variant="primary">Export CCTV</Button></Link>
        <Link href={route('admin.export.users')}><Button variant="secondary">Export Users</Button></Link>
        <Link href={route('admin.export.buildings')}><Button variant="secondary">Export Buildings</Button></Link>
        <Link href={route('admin.export.rooms')}><Button variant="secondary">Export Rooms</Button></Link>
        <Link href={route('admin.export.contacts')}><Button variant="secondary">Export Contacts</Button></Link>
      </div>
    </AdminLayout>
  );
}

