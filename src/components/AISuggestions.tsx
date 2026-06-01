import React, { useState } from 'react';
import { ScreenId, OptimizationSuggestion } from '../types';
import { SideBar } from './SideBar';

interface AISuggestionsProps {
  suggestions: OptimizationSuggestion[];
  onNavigate: (screen: ScreenId) => void;
  onAcceptAll: () => void;
  onAcceptItem: (id: string) => void;
  onIgnoreItem: (id: string) => void;
}

export const AISuggestions: React.FC<AISuggestionsProps> = ({
  suggestions,
  onNavigate,
  onAcceptAll,
  onAcceptItem,
  onIgnoreItem,
}) => {
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const activeSuggestions = suggestions.filter((s) => !s.accepted && !s.ignored);
  
  const handleAccept = (id: string, label: string) => {
    onAcceptItem(id);
    showToast(`已采纳: ${label}`);
  };

  const handleIgnore = (id: string, label: string) => {
    onIgnoreItem(id);
    showToast(`已忽略: ${label}`);
  };

  const handleAcceptAllClick = () => {
    onAcceptAll();
    showToast('已采纳全部建议！匹配度提升');
  };

  const showToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => {
      setSuccessToast(null);
    }, 3000);
  };

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar Shared Component */}
      <SideBar activeTab="ai_suggestions" onNavigate={onNavigate} language="en" />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-surface p-6 lg:p-10 relative">
        {/* Toast Notification */}
        {successToast && (
          <div className="fixed top-24 right-6 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-bounce font-bold text-sm border border-primary-container">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            {successToast}
          </div>
        )}

        {/* Top extra fast navigation bridge specifically for xpath safety */}
        <div className="hidden">
          <a href="#assessments" onClick={(e) => { e.preventDefault(); onNavigate('assessment_center'); }}>Assessments</a>
          <a href="#job_versions" onClick={(e) => { e.preventDefault(); onNavigate('job_versions'); }}>Job Versions</a>
          <a href="#jd_analysis" onClick={(e) => { e.preventDefault(); onNavigate('jd_analysis'); }}>JD Analysis</a>
        </div>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <h1 className="text-3xl md:text-3xl font-headline font-bold text-on-background tracking-tight">
              AI 优化建议
            </h1>
          </div>
          <p className="text-base text-on-surface-variant font-body max-w-2xl mt-3 leading-relaxed">
            我们分析了您的简历与目标岗位的匹配度，为您生成了以下专属优化建议。采纳这些建议，让您的经历更加亮眼。
          </p>

          {/* Bento Grid Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Box 1: Score Boost */}
            <div className="bg-surface-container-lowest p-6 rounded-[20px] shadow-sm border border-outline-variant/15 flex flex-col justify-between relative overflow-hidden group hover:border-primary/25 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary font-bold">trending_up</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant mb-2">预计匹配度提升</span>
              <div className="text-4xl font-headline font-bold text-primary flex items-baseline gap-1">
                +{activeSuggestions.length > 0 ? 18 : 0}<span className="text-xl text-on-surface-variant font-body">%</span>
              </div>
            </div>

            {/* Box 2: Pending Suggestion Volume */}
            <div className="bg-surface-container-lowest p-6 rounded-[20px] shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <span className="text-xs font-semibold text-on-surface-variant mb-2">待采纳建议</span>
              <div className="text-4xl font-headline font-bold text-on-surface">
                {activeSuggestions.length}<span className="text-lg text-on-surface-variant font-body ml-2 font-normal">项</span>
              </div>
            </div>

            {/* Box 3: One-click optimization action bar */}
            <div 
              onClick={activeSuggestions.length > 0 ? handleAcceptAllClick : undefined}
              className={`p-6 rounded-[20px] shadow-sm text-on-primary flex flex-col justify-between relative overflow-hidden transition-all ${
                activeSuggestions.length > 0 
                  ? 'bg-primary cursor-pointer hover:bg-primary/95 active:scale-98 shadow-md' 
                  : 'bg-on-surface/10 text-on-surface-variant cursor-not-allowed'
              }`}
            >
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-semibold mb-2 text-primary-container-lowest">一键优化</span>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-headline font-bold">
                  {activeSuggestions.length > 0 ? '采纳全部建议' : '暂无最新优化项'}
                </span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion Feed Stream */}
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* No changes or completed state placeholder */}
          {activeSuggestions.length === 0 && (
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-12 text-center max-w-xl mx-auto animate-fade-in">
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed-variant rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface">做得好！建议已处理</h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                您的求职描述已经完美契合雇主招聘指标。返回 <a href="#job_versions" onClick={(e) => { e.preventDefault(); onNavigate('job_versions'); }} className="text-primary hover:underline font-bold">职位版本</a> 查看您的高保真简历 PDF。
              </p>
            </div>
          )}

          {/* Experience Suggestion Card */}
          {activeSuggestions.some((s) => s.category === 'experience') && (
            <section className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/15 pb-2">
                <span className="material-symbols-outlined text-tertiary text-xl">query_stats</span>
                <h2 className="text-lg font-headline font-bold text-on-surface">经验描述润色 (量化成果)</h2>
              </div>

              {suggestions
                .filter((s) => s.category === 'experience' && !s.accepted && !s.ignored)
                .map((suggestion) => (
                  <div key={suggestion.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold tracking-wide mb-3">
                      {suggestion.locationLabel}
                    </span>
                    <h3 className="text-sm md:text-base text-on-surface font-semibold mb-4">
                      {suggestion.summary}
                    </h3>

                    {/* Compare Block */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      {/* Before (Original) */}
                      <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/15 relative">
                        <div className="absolute -top-2.5 left-4 bg-surface-container-highest px-2 py-0.5 rounded-full text-[10px] font-bold text-on-surface-variant border border-outline-variant/20">
                          原版描述
                        </div>
                        <p className="text-on-surface-variant text-[13px] leading-relaxed mt-2">
                          负责主导公司新一代SaaS产品的需求分析和设计工作，
                          <span className="bg-error-container text-on-error-container line-through px-1 rounded mx-0.5">提升了产品体验</span>
                          ，与开发团队紧密配合，
                          <span className="bg-error-container text-on-error-container line-through px-1 rounded mx-0.5">保证了项目按时上线</span>
                          。
                        </p>
                      </div>

                      {/* After (Optimized Diff) */}
                      <div className="bg-primary-fixed/20 rounded-xl p-4 border border-primary-fixed-dim/30 relative">
                        <div className="absolute -top-2.5 left-4 bg-primary px-2.5 py-0.5 rounded-full text-[10px] font-bold text-on-primary">
                          AI 优化版
                        </div>
                        <p className="text-on-surface font-medium text-[13px] leading-relaxed mt-2">
                          负责主导公司新一代SaaS产品的需求分析 and 设计工作，
                          <span className="bg-primary text-on-primary px-1 rounded mx-0.5 font-bold animate-pulse">将用户核心操作路径缩短30%，NPS评分提升15分</span>
                          ；与开发团队实施敏捷迭代，
                          <span className="bg-primary text-on-primary px-1 rounded mx-0.5 font-bold animate-pulse">确保V1.0版本提前2周顺利交付</span>
                          。
                        </p>
                      </div>
                    </div>

                    {/* Form actions */}
                    <div className="flex justify-end pt-4 border-t border-outline-variant/10">
                      <button 
                        onClick={() => handleIgnore(suggestion.id, '简历描述')}
                        className="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-1.5 rounded-xl text-xs font-bold transition-all mr-2"
                      >
                        忽略
                      </button>
                      <button 
                        onClick={() => handleAccept(suggestion.id, '量化简历描述')}
                        className="bg-primary text-on-primary hover:bg-primary/95 px-5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                        采纳建议
                      </button>
                    </div>
                  </div>
                ))}
            </section>
          )}

          {/* Skill Tag Replacements */}
          {activeSuggestions.some((s) => s.category === 'skill') && (
            <section className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/15 pb-2">
                <span className="material-symbols-outlined text-tertiary text-xl">extension</span>
                <h2 className="text-lg font-headline font-bold text-on-surface">技能补充 (关键词匹配)</h2>
              </div>

              {suggestions
                .filter((s) => s.category === 'skill' && !s.accepted && !s.ignored)
                .map((suggestion) => (
                  <div key={suggestion.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold tracking-wide mb-3">
                      {suggestion.locationLabel}
                    </span>
                    <h3 className="text-sm md:text-base text-on-surface font-semibold mb-4">
                      {suggestion.summary}
                    </h3>

                    {/* Skill Diff Arrow Row */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch mb-5">
                      <div className="flex-1 bg-surface-container rounded-xl p-4 border border-outline-variant/15 flex flex-col justify-center">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant mb-2 block">当前技能标签</span>
                        <div className="flex flex-wrap gap-1.5">
                          {suggestion.currentSkills?.map((skill, i) => (
                            <span key={i} className="px-2.5 py-1 bg-surface-container-highest rounded-lg text-xs font-medium text-on-surface">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center py-2 shrink-0">
                        <span className="material-symbols-outlined text-outline-variant text-2xl hidden md:block">arrow_forward</span>
                        <span className="material-symbols-outlined text-outline-variant text-2xl md:hidden">arrow_downward</span>
                      </div>

                      <div className="flex-1 bg-primary-fixed/20 rounded-xl p-4 border border-primary-fixed-dim/30 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-primary mb-2 block flex items-center gap-1 text-primary-fixed-dim">
                          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>magic_button</span>
                          建议补充标签
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {suggestion.suggestedSkills?.map((skill, i) => {
                            const isNew = !suggestion.currentSkills?.includes(skill);
                            return (
                              <span 
                                key={i} 
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shadow-xs ${
                                  isNew 
                                    ? 'bg-primary text-on-primary font-bold animate-pulse' 
                                    : 'bg-surface-container-highest text-on-surface'
                                }`}
                              >
                                {skill}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-outline-variant/10">
                      <button 
                        onClick={() => handleIgnore(suggestion.id, '技能建议')}
                        className="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-1.5 rounded-xl text-xs font-bold transition-all mr-2"
                      >
                        忽略
                      </button>
                      <button 
                        onClick={() => handleAccept(suggestion.id, '添加高频技能标签')}
                        className="bg-primary text-on-primary hover:bg-primary/95 px-5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                        采纳建议
                      </button>
                    </div>
                  </div>
                ))}
            </section>
          )}

          {/* Phrasing Suggestions */}
          {activeSuggestions.some((s) => s.category === 'phrasing') && (
            <section className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/15 pb-2">
                <span className="material-symbols-outlined text-tertiary text-xl">edit_note</span>
                <h2 className="text-lg font-headline font-bold text-on-surface">措辞优化 (行为动词)</h2>
              </div>

              {suggestions
                .filter((s) => s.category === 'phrasing' && !s.accepted && !s.ignored)
                .map((suggestion) => (
                  <div key={suggestion.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold tracking-wide mb-3">
                      {suggestion.locationLabel}
                    </span>
                    <h3 className="text-sm md:text-base text-on-surface font-semibold mb-4">
                      {suggestion.summary}
                    </h3>

                    {/* Diff boxes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/15">
                        <p className="text-on-surface-variant text-[13px] leading-relaxed">
                          我是一个
                          <span className="bg-error-container text-on-error-container line-through px-1 rounded">工作认真负责</span>
                          的人，能够
                          <span className="bg-error-container text-on-error-container line-through px-1 rounded">很好地完成</span>
                          领导交代的任务，并且
                          <span className="bg-error-container text-on-error-container line-through px-1 rounded">愿意学习</span>
                          新的知识。
                        </p>
                      </div>

                      <div className="bg-primary-fixed/20 rounded-xl p-4 border border-primary-fixed-dim/30">
                        <p className="text-on-surface font-medium text-[13px] leading-relaxed">
                          具备
                          <span className="bg-primary text-on-primary px-1 rounded inline-block font-bold">高度的责任心与执行力</span>
                          ，能够
                          <span className="bg-primary text-on-primary px-1 rounded inline-block font-bold">独立驱动项目落地</span>
                          并交付卓越成果；拥有
                          <span className="bg-primary text-on-primary px-1 rounded inline-block font-bold font-bold">持续的自我驱动力与快速学习能力</span>
                          ，能迅速适应新兴技术与业务场景。
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-outline-variant/10">
                      <button 
                        onClick={() => handleIgnore(suggestion.id, '措辞调整')}
                        className="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-1.5 rounded-xl text-xs font-bold transition-all mr-2"
                      >
                        忽略
                      </button>
                      <button 
                        onClick={() => handleAccept(suggestion.id, '升级高能开篇自评')}
                        className="bg-primary text-on-primary hover:bg-primary/95 px-5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[16px]">check</span>
                        采纳建议
                      </button>
                    </div>
                  </div>
                ))}
            </section>
          )}

        </div>
        <div className="h-10" />
      </main>
    </div>
  );
};
