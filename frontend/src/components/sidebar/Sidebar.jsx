import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard',          label: '🏠 Dashboard' },
  { to: '/browse-trips',       label: '🗺 Browse Trips' },
  { to: '/create-trip',        label: '➕ Create Trip' },
  { to: '/companion-matching', label: '🤝 Matching' },
  { to: '/ai-travel-twin',     label: '🤖 AI Twin' },
  { to: '/discovery',          label: '🔭 Discovery' },
  { to: '/chat',               label: '💬 Chat' },
  { to: '/expenses',           label: '💰 Expenses' },
  { to: '/notifications',      label: '🔔 Notifications' },
  { to: '/saved-places',       label: '📍 Saved Places' },
  { to: '/reviews',            label: '⭐ Reviews' },
  { to: '/settings',           label: '⚙ Settings' },
];

const Sidebar = () => (
  <aside className="w-56 min-h-screen bg-gray-50 border-r border-gray-200 p-4 flex flex-col gap-1">
    {links.map(({ to, label }) => (
      <NavLink key={to} to={to}
        className={({ isActive }) =>
          `text-sm px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`
        }>
        {label}
      </NavLink>
    ))}
  </aside>
);
export default Sidebar;
