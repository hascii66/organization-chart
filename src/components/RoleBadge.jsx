import React from 'react';

const RoleBadge = ({ icon: Icon, title, count, colorClass }) => (
  <div className={`flex items-center justify-between p-2 rounded-lg mb-2 ${colorClass}`}>
    <div className="flex items-center gap-2">
      <Icon size={16} />
      <span className="text-sm font-medium">{title}</span>
    </div>
    <span className="text-xs font-bold bg-white/50 px-2 py-0.5 rounded-full">x{count}</span>
  </div>
);

export default RoleBadge;
