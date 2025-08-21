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
        <input className="flex-1 rounded border px-3 py-2" placeholder="Tulis pesan..." value={data.content} onChange={e=>setData('content', e.target.value)} />
        <Button disabled={processing}>Kirim</Button>
      </form>
      <div className="space-y-2">
        {items.map((m: any) => (
          <div key={m.id} className="rounded border p-3">
            <div className="text-xs text-gray-500">{m.created_at}</div>
            <div>{m.content}</div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

