import React from 'react';
import { Head } from '@inertiajs/react';

export default function UserContactIndex({ contacts }: any) {
  return (
    <div className="p-4 space-y-3">
      <Head title="Contact" />
      <div className="text-lg font-semibold">Contact</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {contacts.map((c: any)=> (
          <div key={c.id} className="rounded-lg border p-4 space-y-1">
            <div className="font-semibold">{c.name}</div>
            {c.email && <a className="text-indigo-600 hover:underline" href={`mailto:${c.email}`}>{c.email}</a>}
            {c.phone && <a className="text-indigo-600 hover:underline" href={`tel:${c.phone}`}>{c.phone}</a>}
            {c.whatsapp && <a className="text-indigo-600 hover:underline" href={`https://wa.me/${c.whatsapp.replace(/[^0-9]/g,'')}`} target="_blank">WhatsApp</a>}
            {c.address && <div className="text-sm text-gray-600">{c.address}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

