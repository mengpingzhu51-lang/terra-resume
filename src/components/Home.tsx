import React from 'react';
import { ScreenId, ResumeVersion } from '../types';

interface HomeProps {
  versions: ResumeVersion[];
  onNavigate: (screen: ScreenId) => void;
}

export const Home: React.FC<HomeProps> = ({ versions, onNavigate }) => {
  // Find versions
  const googleVersion = versions.find(v => v.company === 'Google') || versions[0];
  const metaVersion = versions.find(v => v.company === 'TikTok' || v.company === 'Meta') || versions[1];

  const handleOptimizingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('job_versions');
  };

  const handleAssessmentsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('assessment_center');
  };

  return (
    <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Hero Welcome Section */}
      <section className="mb-10 relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/10 p-8 md:p-12 terra-shadow animate-fade-in">
        {/* Decorative ambient gradient */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.08] pointer-events-none" 
          style={{ background: "radial-gradient(circle at top right, var(--color-primary), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">
            欢迎回来，Alex。
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg mb-8 font-body leading-relaxed">
            您的通用简历表现出色。本周您有 3 个正在进行的针对性申请。准备好为下一个职位进行优化了吗？
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate('ai_suggestions')}
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/95 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              智能生成
            </button>
            <button 
              onClick={() => onNavigate('jd_analysis')}
              className="bg-transparent text-primary hover:bg-primary/5 border border-primary px-6 py-3 rounded-xl font-bold transition-all active:scale-95"
            >
              查看分析
            </button>
          </div>
        </div>
      </section>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Master Resume & Quick Actions */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15 terra-shadow hover:border-primary/20 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                </div>
                <div>
                  <h2 className="font-headline font-bold text-lg text-on-surface">通用简历</h2>
                  <p className="text-xs text-on-surface-variant font-medium">Alex_Resume.pdf</p>
                </div>
              </div>
              <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-1 rounded-full font-bold">
                2天前更新
              </span>
            </div>
            
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              您的基础职业经历。请保持更新以生成准确的针对性版本。
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs text-on-surface-variant font-bold">
                <span>完整度</span>
                <span className="text-primary font-headline font-bold">92%</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-xs font-bold transition-colors">
                编辑
              </button>
              <button 
                onClick={() => onNavigate('assessment_center')}
                className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                预览
              </button>
            </div>
          </div>

          {/* Quick Navigate Helper Panel inside UI for testing safety */}
          <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/10">
            <h3 className="font-headline font-bold text-sm text-on-surface mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">navigation</span>
              快捷导航流程
            </h3>
            <div className="flex flex-col gap-2 font-semibold text-xs">
              <a 
                href="#job_versions" 
                onClick={handleOptimizingClick}
                className="flex items-center justify-between p-2.5 bg-surface rounded-lg hover:bg-primary-container/20 hover:text-primary transition-all group"
              >
                <span>🚀 进行针对性简历优化器</span>
                <span className="font-bold text-primary group-hover:translate-x-1 transition-transform">优化器 →</span>
              </a>
              <a 
                href="#assessments" 
                onClick={handleAssessmentsClick}
                className="flex items-center justify-between p-2.5 bg-surface rounded-lg hover:bg-primary-container/20 hover:text-primary transition-all group"
              >
                <span>📊 查看专业简历诊断报告</span>
                <span className="font-bold text-primary group-hover:translate-x-1 transition-transform">评估 →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Targeted Versions */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline font-bold text-xl md:text-2xl text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">layers</span>
              针对性版本
            </h2>
            <button 
              onClick={() => onNavigate('job_versions')}
              className="text-primary hover:text-primary-container font-bold text-sm py-1 px-3 bg-primary-fixed text-on-primary-fixed-variant rounded-full flex items-center gap-1 hover:shadow-xs transition-all active:scale-95"
            >
              / 职位版本
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Version Card 1 - Google Product Manager */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15 hover:border-primary/25 hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              {/* Score circle badge */}
              <div className="absolute top-6 right-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-[3px] border-primary-container flex items-center justify-center text-primary font-bold text-xs bg-surface-container-lowest z-10 transition-transform group-hover:scale-105 shadow-sm">
                  88%
                </div>
                <span className="text-[9px] text-on-surface-variant font-bold tracking-wider mt-1">匹配度</span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1 text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary block" />
                  进行中
                </span>
                <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors pr-14 leading-snug">
                  Google - 产品经理
                </h3>
                <p className="text-on-surface-variant text-xs mt-1.5 font-medium">
                  L6 产品经理 ，搜索部门
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-on-surface-variant mt-6 pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  10月12日
                </div>
              </div>

              <div className="mt-4">
                <button 
                  onClick={() => onNavigate('ai_suggestions')}
                  className="w-full bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed-variant py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  继续优化
                </button>
              </div>
            </div>

            {/* Version Card 2 - Meta Product Director */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/15 hover:border-primary/25 hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              {/* Score circle badge */}
              <div className="absolute top-6 right-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-[3px] border-primary flex items-center justify-center text-primary font-bold text-xs bg-surface-container-lowest z-10 transition-transform group-hover:scale-105 shadow-sm">
                  95%
                </div>
                <span className="text-[9px] text-on-surface-variant font-bold tracking-wider mt-1">匹配度</span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1 text-[10px] bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full font-bold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                  已导出
                </span>
                <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors pr-14 leading-snug">
                  Meta - 产品负责人
                </h3>
                <p className="text-on-surface-variant text-xs mt-1.5 font-medium">
                  Reality Labs ，AR 平台
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-on-surface-variant mt-6 pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  10月8日
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => onNavigate('jd_analysis')}
                  className="flex-1 bg-surface-container hover:bg-surface-container-high text-on-surface py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  查看匹配
                </button>
                <button className="bg-surface-container hover:bg-surface-container-high text-on-surface p-2 rounded-xl transition-all flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
