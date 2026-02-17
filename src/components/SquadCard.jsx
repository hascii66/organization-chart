import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RoleBadge from './RoleBadge';

const SquadCard = ({ name, description, roles }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex flex-col items-center">
            {/* Connector Line */}
            <div className="h-6 w-0.5 bg-gray-300"></div>

            <div className="w-full max-w-xs bg-white rounded-xl shadow-lg border-t-4 border-blue-500 overflow-hidden transition-all hover:shadow-xl">
                <div
                    className="p-3 bg-gray-50 flex justify-between items-center cursor-pointer border-b border-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h3 className="font-bold text-gray-800">{name}</h3>
                    {isOpen ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                </div>

                {isOpen && (
                    <div className="p-4 space-y-3">
                        {roles.map((role) => (
                            <RoleBadge
                                key={role.id}
                                icon={role.icon}
                                title={role.title}
                                count={role.count}
                                colorClass={role.colorClass}
                                levels={role.levels}
                            />
                        ))}
                        <div className="text-xs text-center text-gray-400 mt-2 pt-2 border-t border-gray-100">
                            {description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SquadCard;
