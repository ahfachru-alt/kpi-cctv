import React from 'react';
import { usePage } from '@inertiajs/react';

export default function Flash() {
  const { props }: any = usePage();
  const { success, error } = props.flash || {};
  if (!success && !error) return null;
  return (
    <div className="mb-3 space-y-2">
      {success && <div className="rounded-lg bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200 px-3 py-2 text-sm">{success}</div>}
      {error && <div className="rounded-lg bg-rose-50 text-rose-800 ring-1 ring-rose-200 px-3 py-2 text-sm">{error}</div>}
    </div>
  );
}

