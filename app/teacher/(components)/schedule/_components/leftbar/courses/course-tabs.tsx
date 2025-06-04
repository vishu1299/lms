'use client';

import { useState } from 'react';

const tabs = ['All Course', 'One by One', 'Webinar', 'Workshop'];

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState('All Course');

  return (
    <div className="flex space-x-11 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex flex-col items-center font-semibold ${
            activeTab === tab ? 'text-neutral-800' : 'text-gray-500'
          }`}
        >
            <span className="text-xl">{tab}</span>
          <span
            className={`h-2 w-2 rounded-full ${
              activeTab === tab ? 'bg-emerald-500' : 'bg-gray-300'
            }`}
          ></span>
          
        </button>
      ))}
    </div>
  );
}
