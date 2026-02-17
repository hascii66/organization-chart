import React, { useState } from 'react';
import { User, Users, Briefcase, Server, Layout } from 'lucide-react';
import Card from './components/Card';
import SquadCard from './components/SquadCard';
import { ORGANIZATION_DATA } from './data/organization';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Software Development Team Structure
          </h1>
          <p className="text-gray-600 text-lg">
            โมเดลการบริหารทีมขนาด 30 คน (Squad Model)
          </p>
        </header>

        {/* --- Organizational Chart Section --- */}
        <div className="overflow-x-auto pb-8 mb-8">
          <div className="w-full flex flex-col items-center">

            {/* Level 1: Manager */}
            <div className="relative z-10">
              <div className="w-64 bg-slate-800 text-white rounded-xl shadow-xl p-4 flex flex-col items-center text-center border-2 border-slate-700">
                <div className="bg-slate-700 p-2 rounded-full mb-2">
                  <User size={24} />
                </div>
                <h2 className="font-bold text-lg">Software Development Manager</h2>
                <p className="text-slate-300 text-sm">Head of Engineering</p>
              </div>
            </div>

            {/* Vertical Line from Manager */}
            <div className="h-10 w-0.5 bg-gray-300"></div>

            {/* Horizontal Branching Line (Desktop Only) */}
            <div className="relative hidden md:flex justify-center w-full max-w-4xl">
              <div className="absolute top-0 w-[80%] h-0.5 bg-gray-300"></div>

              {/* Branch Down to Shared Services (Left) */}
              <div className="absolute top-0 left-[10%] h-6 w-0.5 bg-gray-300"></div>

              {/* Branch Down to Shared Services (Right) */}
              <div className="absolute top-0 right-[10%] h-6 w-0.5 bg-gray-300"></div>
            </div>

            {/* Level 2: Shared Services & Squads Container */}
            <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-4 w-full max-w-5xl">

              {/* Left Side: Shared Services Group 1 */}
              {/* Left Side: Shared Services Group 1 (First half) */}
              <div className="md:col-span-2 flex flex-col items-center mt-0 md:mt-6 order-2 md:order-1 gap-6">
                {/* Mobile Connector */}
                <div className="h-6 w-0.5 bg-gray-300 md:hidden -mt-8 mb-0"></div>

                {ORGANIZATION_DATA.sharedServices.slice(0, 1).map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id} className={`${service.colorClass} border-2 rounded-xl p-3 shadow-sm w-full max-w-xs text-center relative z-10`}>
                      <Icon size={20} className={`mx-auto ${service.iconColor} mb-1`} />
                      <h3 className={`font-bold ${service.textColor} text-sm`}>{service.name}</h3>
                      <p className={`text-xs ${service.textColor}`}>{service.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Center: Squads */}
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 order-1 md:order-2">
                {ORGANIZATION_DATA.squads.map((squad) => (
                  <SquadCard
                    key={squad.id}
                    name={squad.name}
                    description={squad.description}
                    roles={squad.roles}
                  />
                ))}
              </div>

              {/* Right Side: Shared Services Group 2 (Second half) */}
              <div className="md:col-span-2 flex flex-col items-center mt-0 md:mt-6 order-3">
                {/* Mobile Connector */}
                <div className="h-6 w-0.5 bg-gray-300 md:hidden -mt-4 mb-0"></div>
                {ORGANIZATION_DATA.sharedServices.slice(1, 2).map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id} className={`${service.colorClass} border-2 rounded-xl p-3 shadow-sm w-full max-w-xs text-center relative z-10`}>
                      <Icon size={20} className={`mx-auto ${service.iconColor} mb-1`} />
                      <h3 className={`font-bold ${service.textColor} text-sm`}>{service.name}</h3>
                      <p className={`text-xs ${service.textColor}`}>{service.description}</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* --- Information Section --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Explainer */}
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Layout className="text-blue-600" />
              ทำไมต้องโครงสร้างนี้?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-blue-100 p-2 rounded-lg h-fit text-blue-600"><Users size={18} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Squad Model (Agile)</h4>
                  <p className="text-sm text-gray-600">แบ่งทีมย่อย 7-9 คน เพื่อความคล่องตัว ลดการสื่อสารที่ซับซ้อน (Communication Overhead)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-green-100 p-2 rounded-lg h-fit text-green-600"><Briefcase size={18} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Cross-functional</h4>
                  <p className="text-sm text-gray-600">รวม Dev, QA, BA ในทีมเดียว ให้งานจบได้โดยไม่ต้องรอคนนอกทีม (End-to-end delivery)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-purple-100 p-2 rounded-lg h-fit text-purple-600"><Server size={18} /></div>
                <div>
                  <h4 className="font-bold text-gray-800">Center of Excellence</h4>
                  <p className="text-sm text-gray-600">ทีมกลาง (UX/UI, Architect) คอยซัพพอร์ตมาตรฐาน เพื่อให้งานทุกทีมไปในทิศทางเดียวกัน</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* Headcount Table */}
          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="text-blue-600" />
              สรุปอัตรากำลังพล (Headcount)
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 uppercase font-semibold">
                  <tr>
                    <th className="px-4 py-3">ตำแหน่ง</th>
                    <th className="px-4 py-3 text-center">ต่อ 1 ทีม</th>
                    <th className="px-4 py-3 text-right">รวม (30 คน)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Team Lead</td>
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3 text-right">3 คน</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">Developers</td>
                    <td className="px-4 py-3 text-center">5</td>
                    <td className="px-4 py-3 text-right">15 คน</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">QA / Tester</td>
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3 text-right">6 คน</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">BA / SA</td>
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3 text-right">3 คน</td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td className="px-4 py-3 font-medium text-purple-900">Shared (UX/UI, Archi)</td>
                    <td className="px-4 py-3 text-center">-</td>
                    <td className="px-4 py-3 text-right font-bold text-purple-700">3 คน</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}