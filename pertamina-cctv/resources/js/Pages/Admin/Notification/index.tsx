import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function AdminNotificationIndex() {
  return (
    <AdminLayout>
      <Head title="Notifications" />
      <div className="text-sm text-gray-600">Realtime notifications will appear here.</div>
    </AdminLayout>
  );
}

