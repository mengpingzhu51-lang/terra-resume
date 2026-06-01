import React from 'react';
import { ScreenId } from '../types';

interface SideBarProps {
  activeTab: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  language: 'zh' | 'en';
}

export const SideBar: React.FC<SideBarProps> = ({ activeTab, onNavigate, language }) => {
  const isZH = language === 'zh';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, screen: ScreenId) => {
    e.preventDefault();
    onNavigate(screen);
  };

  return (
    <aside className="hidden md:flex flex-col h-[calc(100vh-73px)] w-64 p-4 gap-2 bg-surface-container-low dark:bg-surface-container-high border-r border-outline-variant/10 sticky top-[73px] shrink-0 z-30">
      {/* Sidebar Header */}
      <div className="p-3 mb-2 bg-surface-container-lowest rounded-xl shadow-[0_2px_10px_rgba(46,50,48,0.02)] border border-outline-variant/10 flex flex-col items-center text-center">
        <div className="w-12 h-16 bg-surface-variant rounded-md mb-2 flex items-center justify-center relative overflow-hidden">
          <span className="material-symbols-outlined text-outline-variant text-2xl">description</span>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
        <h3 className="font-headline font-bold text-on-surface text-sm">{isZH ? '项目经理' : 'Project Manager'}</h3>
        <p className="text-[11px] text-on-surface-variant mt-0.5">{isZH ? 'v2.1 针对 Google 优化' : 'v2.1 optimized for Google'}</p>
        
        <button className="mt-3 w-full bg-secondary-container hover:bg-surface-variant text-on-secondary-container border border-outline-variant/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[16px]">add</span>
          {isZH ? '创建新副本' : 'New Version'}
        </button>
      </div>

      {/* Main Sidebar Navigation links */}
      <nav className="flex-1 space-y-1 font-semibold text-sm">
        {/* 通用简历 Link */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out group"
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">description</span>
          {isZH ? '通用简历' : 'Master Resume'}
        </a>

        {/* Job Versions Link. Xpath expected:
            - "Job Versions" inside Screen 3 (ai_suggestions)
            - "职位版本" inside Screen 4 (jd_analysis)
        */}
        <a
          href="#job_versions"
          onClick={(e) => handleNavClick(e, 'job_versions')}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-in-out group ${
            activeTab === 'job_versions'
              ? 'bg-primary-container text-on-primary-container font-bold shadow-sm border border-primary/10'
              : 'text-on-surface-variant hover:bg-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]" style={activeTab === 'job_versions' ? { fontVariationSettings: "'FILL' 1" } : {}}>layers</span>
          {isZH ? '职位版本' : 'Job Versions'}
        </a>

        {/* JD Analysis Link. Xpath expected:
            - "JD Analysis" inside Screen 3 (ai_suggestions)
            - "职位匹配分析" inside Screen 5 (job_versions)
        */}
        <a
          href="#jd_analysis"
          onClick={(e) => handleNavClick(e, 'jd_analysis')}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-in-out group ${
            activeTab === 'jd_analysis'
              ? 'bg-primary-container text-on-primary-container font-bold shadow-sm border border-primary/10'
              : 'text-on-surface-variant hover:bg-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]" style={activeTab === 'jd_analysis' ? { fontVariationSettings: "'FILL' 1" } : {}}>analytics</span>
          {isZH ? '职位匹配分析' : 'JD Analysis'}
        </a>

        {/* AI Suggestions Link. Xpath expected:
            - "AI 优化建议" inside Screen 4 (jd_analysis) or Screen 5 (job_versions)
        */}
        <a
          href="#ai_suggestions"
          onClick={(e) => handleNavClick(e, 'ai_suggestions')}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ease-in-out group ${
            activeTab === 'ai_suggestions'
              ? 'bg-primary-container text-on-primary-container font-bold shadow-sm border border-primary/10'
              : 'text-on-surface-variant hover:bg-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]" style={activeTab === 'ai_suggestions' ? { fontVariationSettings: "'FILL' 1" } : {}}>psychology</span>
          {isZH ? 'AI 优化建议' : 'AI Suggestions'}
        </a>

        <a
          href="#revision_history"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out group cursor-not-allowed opacity-60"
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]">history</span>
          {isZH ? '修订历史' : 'Revision History'}
        </a>
      </nav>

      {/* Help Center */}
      <div className="mt-auto pt-3 border-t border-outline-variant/20">
        <a
          href="#help"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-variant rounded-lg transition-all duration-200 ease-in-out"
        >
          <span className="material-symbols-outlined text-outline text-[20px]">help_outline</span>
          {isZH ? '帮助中心' : 'Help Center'}
        </a>
      </div>
    </aside>
  );
};
