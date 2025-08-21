import React from 'react';

export const Table: React.FC<{ columns: string[]; children: React.ReactNode }>
  = ({ columns, children }) => (
  <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
    <table className="min-w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((c) => (
            <th key={c} className={`px-3 py-2 ${c === 'Action' ? 'text-right' : 'text-left'}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

