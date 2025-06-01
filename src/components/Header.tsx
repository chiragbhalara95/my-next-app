'use client';
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  {
    title: 'Products',
    submenu: [
      { label: 'New AIs', href: '/new' },
      { label: 'Most Saved AIs', href: '/most-saved' },
      { label: 'Most Used AIs', href: '/most-used' },
      { label: 'AI Apps', href: '/apps' },
      { label: 'Discord of AI', href: '/discord' },
    ],
  },
  {
    title: 'Ranking',
    submenu: [
      { label: 'Top AI by Monthly', href: '/Best-trending-AI-Tools' },
      { label: 'Top AI by Categories', href: '/Best-AI-Tools-Category' },
      { label: 'Top AI by Region', href: '/Best-AI-Tools-region' },
    ],
  },
  {
    title: 'Submit & Advertise',
    submenu: [
      { label: 'Submit', href: '/submit' },
      { label: 'Advertise', href: '/advertise' },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>

        <nav className="hidden lg:flex gap-8 relative">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveMenu(idx)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-gray-800 hover:text-purple-700 flex items-center gap-1">
                {item.title}
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {activeMenu === idx && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg z-10">
                  <ul className="p-4 space-y-2">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          href={sub.href}
                          className="block text-gray-700 hover:text-purple-600"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <Link href="/ai-model" className="text-gray-800 hover:text-purple-700">
            AI Models
          </Link>
        </nav>
      </div>
    </header>
  );
}
