import React, { useEffect, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/Components/Admin/Button';

declare global { interface Window { Echo?: any } }

export default function AdminMessageIndex({ messages }: any) {
  const [items, setItems] = useState(messages);
  const { data, setData, post, processing } = useForm<{ content: string; to_user_id?: number | '' }>({ content: '', to_user_id: '' });

  useEffect(() => {
    if (window.Echo) {
      window.Echo.channel('chat').listen('.MessageSent', (e: any) => {
        setItems((prev: any[]) => [e, ...prev].slice(0, 100));
      });
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.message.store'), { onSuccess: () => setData('content', '') });
  };

  return (
    <AdminLayout>
      <Head title="Messages" />
      <form onSubmit={submit} className="mb-3 flex gap-2">
        <input className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" placeholder="Tulis pesan..." value={data.content} onChange={e=>setData('content', e.target.value)} />
        <Button disabled={processing}>Kirim</Button>
      </form>
      <div className="space-y-2">
        {items.map((m: any) => (
          <div key={m.id} className="rounded-lg bg-white p-3 ring-1 ring-gray-200">
            <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
              <span>{m.created_at}</span>
              {m.user?.name && <span className="font-medium text-gray-600">{m.user.name}</span>}
            </div>
            <div className="text-sm text-gray-800">{m.content}</div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

