'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isAssessment = pathname === '/assessment-center';
  const isChineseNav = isHome || pathname === '/jd-analysis';

  return (
    <nav className="bg-background border-b border-outline-variant/10 flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 shadow-sm transition-all duration-200">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-xl font-headline font-bold text-primary dark:text-inverse-primary cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          Terra Resume
        </Link>

        <div className="hidden md:flex items-center gap-6 font-semibold">
          {isChineseNav ? (
            <>
              <Link
                href="/"
                className={`font-body text-sm transition-colors py-1 ${
                  isHome
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                首页
              </Link>
              <Link
                href="/job-versions"
                className={`font-body text-sm transition-colors py-1 ${
                  !isHome && !isAssessment
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                优化器
              </Link>
              <Link
                href="/assessment-center"
                className={`font-body text-sm transition-colors py-1 ${
                  isAssessment
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                评估
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className={`font-label text-sm transition-colors py-1 ${
                  isHome
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/job-versions"
                className={`font-label text-sm transition-colors py-1 ${
                  !isHome && !isAssessment
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Optimizer
              </Link>
              <Link
                href="/assessment-center"
                className={`font-label text-sm transition-colors py-1 ${
                  isAssessment
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Assessments
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant/50 text-sm">search</span>
          <input
            type="text"
            placeholder="搜索..."
            className="pl-9 pr-4 py-1.5 rounded-full bg-surface-container border-none text-sm focus:ring-1 focus:ring-primary w-48 text-on-surface outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-container-low relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-error rounded-full" />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-container-low">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-on-primary px-4 py-2 rounded-xl text-sm font-semibold scale-98 active:opacity-80 transition-all hidden sm:block shadow-sm">
          导出
        </button>

        <Link
          href="/"
          className="w-9 h-9 rounded-full overflow-hidden border border-outline-variant/30 cursor-pointer shadow-sm hover:ring-2 hover:ring-primary transition-all"
        >
          <img
            alt="Alex Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
          />
        </Link>
      </div>
    </nav>
  );
};
