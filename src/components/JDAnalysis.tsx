'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '../context/AppContext';
import { SideBar } from './SideBar';

export const JDAnalysis: React.FC = () => {
  const { skillGaps, hardKeywords, softKeywords, cultureKeywords } = useAppContext();
  const [hoveredGapId, setHoveredGapId] = useState<string | null>(null);

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar with Chinese titles for layout */}
      <SideBar activeTab="jd_analysis" language="zh" />

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto p-4 md:p-8 lg:p-10 w-full bg-surface">
        {/* Page Header */}
        <header className="mb-8 max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 animate-fade-in">
          <div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-tertiary mb-2 font-label font-bold">
              <span className="material-symbols-outlined text-[16px]">business_center</span>
              <span>Google • 高级产品经理</span>
            </div>
            <h1 className="text-2.5xl md:text-3xl font-headline font-bold text-on-surface tracking-tight">职位匹配分析</h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl text-xs md:text-sm leading-relaxed">
              深度解析职位描述，使您的简历与企业需求精准匹配。
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-3.5 py-2 rounded-xl text-xs font-bold bg-surface-container-high text-on-surface hover:bg-surface-variant transition-all hover:shadow-xs border border-outline-variant/20 flex items-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-[18px]">upload_file</span>
              更新职位描述
            </button>
            <Link
              href="/ai-suggestions"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-primary text-on-primary hover:bg-primary/95 transition-all shadow-sm flex items-center gap-2 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              应用建议
            </Link>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Match Score Hero Card (Spans 4 columns) */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15 shadow-xs flex flex-col justify-between relative overflow-hidden h-full min-h-[380px] group hover:border-primary/20 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <h2 className="text-base font-headline font-bold text-on-surface mb-1">匹配总得分</h2>
              <p className="text-[11px] text-on-surface-variant mb-6 font-medium">基于语义差异分析</p>

              <div className="flex items-center justify-center mb-6">
                {/* SVG Progress Circle */}
                <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-102 transition-transform">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="var(--color-surface-container-low)" strokeWidth="6" />
                    <circle 
                      cx="50" cy="50" r="44" fill="none" 
                      stroke="var(--color-primary)" strokeWidth="6" 
                      strokeDasharray="276.4" strokeDashoffset="60.8"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-3xl font-headline font-bold text-primary">78<span className="text-lg">%</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Breakdowns */}
            <div className="space-y-3 font-semibold text-xs text-on-surface pt-4 border-t border-outline-variant/10">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary block" /> 
                  硬技能
                </span>
                <span className="font-bold">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary block" /> 
                  软技能
                </span>
                <span className="font-bold">60%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary block" /> 
                  文化契合度
                </span>
                <span className="font-bold">90%</span>
              </div>
            </div>
          </div>

          {/* Skill Gap Analysis (Spans 8 columns) */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15 shadow-xs flex flex-col justify-between h-full min-h-[380px] hover:border-primary/20 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-base font-headline font-bold text-on-surface">技能差距分析</h2>
                <p className="text-xs text-on-surface-variant leading-relaxed">简历目前未能完全满足职位要求的领域。</p>
              </div>
              <div className="p-2 bg-surface-container-low rounded-lg text-primary">
                <span className="material-symbols-outlined text-xl">radar</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-5">
              {skillGaps.map((gap) => {
                const isHovered = hoveredGapId === gap.id;
                return (
                  <div 
                    key={gap.id}
                    onMouseEnter={() => setHoveredGapId(gap.id)}
                    onMouseLeave={() => setHoveredGapId(null)}
                    className="p-3.5 rounded-xl transition-all border border-transparent hover:bg-surface-container-low/60 hover:border-outline-variant/15 cursor-pointer relative"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        {gap.status === 'core_missing' && <span className="material-symbols-outlined text-error text-[18px]">warning</span>}
                        {gap.status === 'partial_missing' && <span className="material-symbols-outlined text-tertiary text-[18px]">info</span>}
                        {gap.status === 'highly_match' && <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>}
                        <span className="text-sm font-bold text-on-surface">{gap.name}</span>
                      </div>
                      
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        gap.status === 'core_missing' ? 'bg-error-container text-on-error-container' : 
                        gap.status === 'partial_missing' ? 'bg-tertiary-container text-on-tertiary-container' : 
                        'bg-primary-fixed text-on-primary-fixed-variant'
                      }`}>
                        {gap.status === 'core_missing' ? '核心缺失' : 
                         gap.status === 'partial_missing' ? '部分缺失' : '高度匹配'}
                      </span>
                    </div>

                    <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden shadow-inner">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          gap.status === 'core_missing' ? 'bg-error' : 
                          gap.status === 'partial_missing' ? 'bg-tertiary' : 'bg-primary'
                        }`} 
                        style={{ width: `${gap.score}%` }} 
                      />
                    </div>

                    {/* Explanatory notes shown either on hover or rendered beautifully below */}
                    <p className={`text-xs text-on-surface-variant mt-2 leading-relaxed transition-all duration-300 ${
                      isHovered ? 'opacity-100 max-h-16' : 'opacity-80'
                    }`}>
                      {gap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Keywords row 1 - Hard Skills (Span 4) */}
          <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 shadow-xs max-w-full">
            <h3 className="text-sm font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
              硬技能
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {hardKeywords.map((item, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 border transition-all ${
                    item.status === 'match' 
                      ? 'bg-primary-container text-on-primary-fixed-variant border-primary/20' 
                      : item.status === 'partial'
                      ? 'bg-surface text-on-surface-variant border-outline-variant/55'
                      : 'bg-surface text-on-surface-variant border-outline-variant/55'
                  }`}
                >
                  {item.name}
                  {item.status === 'match' && <span className="material-symbols-outlined text-[10px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                  {item.status === 'partial' && <span className="material-symbols-outlined text-[12px] text-tertiary">horizontal_rule</span>}
                  {item.status === 'missing' && <span className="material-symbols-outlined text-[12px] text-error">close</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Keywords row 2 - Soft Skills (Span 4) */}
          <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 shadow-xs max-w-full">
            <h3 className="text-sm font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              软技能
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {softKeywords.map((item, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 border transition-all ${
                    item.status === 'match' 
                      ? 'bg-tertiary-container/20 text-on-tertiary-fixed-variant border-tertiary/20' 
                      : 'bg-surface text-on-surface-variant border-outline-variant/55'
                  }`}
                >
                  {item.name}
                  {item.status === 'match' && <span className="material-symbols-outlined text-[10px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                  {item.status === 'missing' && <span className="material-symbols-outlined text-[12px] text-error">close</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Keywords row 3 - Culture Fit (Span 4) */}
          <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10 shadow-xs max-w-full">
            <h3 className="text-sm font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">diversity_3</span>
              文化契合度
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cultureKeywords.map((item, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 border transition-all ${
                    item.status === 'match' 
                      ? 'bg-secondary-container text-on-secondary-fixed-variant border-secondary/20' 
                      : 'bg-surface text-on-surface-variant border-outline-variant/55'
                  }`}
                >
                  {item.name}
                  {item.status === 'match' && <span className="material-symbols-outlined text-[10px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                  {item.status === 'partial' && <span className="material-symbols-outlined text-[12px] text-tertiary">horizontal_rule</span>}
                </span>
              ))}
            </div>
          </div>

        </div>
        <div className="h-10" />
      </main>
    </div>
  );
};
