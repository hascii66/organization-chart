import React from 'react';

const RoleBadge = ({ icon: Icon, title, count, colorClass, levels }) => (
    <div className={`flex flex-col p-2 rounded-lg mb-2 ${colorClass}`}>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <Icon size={16} />
                <span className="text-sm font-medium">{title}</span>
            </div>
            <span className="text-xs font-bold bg-white/50 px-2 py-0.5 rounded-full">x{count}</span>
        </div>

        {levels && levels.length > 0 && (
            <div className="mt-2 pl-6 space-y-0.5 border-t border-black/5 pt-1">
                {levels.map((level, index) => (
                    <div key={index} className="flex justify-between text-xs opacity-80 hover:opacity-100 transition-opacity">
                        <span>{level.label}</span>
                        <span className="font-mono bg-white/30 px-1 rounded text-[10px]">{level.count}</span>
                    </div>
                ))}
            </div>
        )}
    </div>
);

export default RoleBadge;
