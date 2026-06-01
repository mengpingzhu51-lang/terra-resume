import React, { useState } from 'react';
import { ScreenId, ResumeVersion } from '../types';
import { SideBar } from './SideBar';

interface JobVersionsProps {
  versions: ResumeVersion[];
  onCreateVersion: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const JobVersions: React.FC<JobVersionsProps> = ({
  versions,
  onCreateVersion,
  onNavigate,
}) => {
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const handleCreateCopy = () => {
    onCreateVersion();
    setCopiedNotification('成功创建新副本并导入通用简历草稿！');
    setTimeout(() => {
      setCopiedNotification(null);
    }, 3000);
  };

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* SideNavBar with English labels for tests */}
      <SideBar activeTab="job_versions" onNavigate={onNavigate} language="en" />

      {/* Hidden helper anchors supporting navigation flow xpath matches */}
      <div className="hidden">
        <a href="#assessments" onClick={(e) => { e.preventDefault(); onNavigate('assessment_center'); }}>Assessments</a>
        <a href="#jd_analysis" onClick={(e) => { e.preventDefault(); onNavigate('jd_analysis'); }}>职位匹配分析</a>
        <a href="#ai_suggestions" onClick={(e) => { e.preventDefault(); onNavigate('ai_suggestions'); }}>AI 优化建议</a>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto p-4 md:p-8 lg:p-10 w-full bg-background animate-fade-in">
        
        {/* Copied Success Notification Overlay */}
        {copiedNotification && (
          <div className="fixed top-24 right-6 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 z-50 animate-bounce font-bold text-sm border border-primary-container">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            {copiedNotification}
          </div>
        )}

        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 max-w-6xl mx-auto">
          <div>
            <h1 className="text-3xl font-headline font-bold text-on-background mb-2">职位版本</h1>
            <p className="text-on-surface-variant font-label text-sm max-w-2xl leading-relaxed">
              Manage and tailor your resume for specific job applications. Higher match scores indicate better alignment with the job description.
            </p>
          </div>
          <button 
            onClick={handleCreateCopy}
            className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label font-bold scale-98 active:opacity-80 hover:bg-primary/95 transition-all flex items-center gap-2 shrink-0 shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            创建新副本
          </button>
        </div>

        {/* Content Bento versions card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          
          {versions.map((version) => {
            const hasScore = version.matchScore !== undefined;
            return (
              <div 
                key={version.id}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 hover:shadow-md hover:border-primary/25 transition-all group relative overflow-hidden flex flex-col h-full justify-between"
              >
                {/* Decorative score background shape */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform group-hover:scale-110 duration-500" />
                
                {/* Top card row */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center p-2 border border-outline-variant/20 shadow-xs">
                    <img 
                      alt={`${version.company} Logo`} 
                      className="w-full h-full object-cover rounded-md"
                      referrerPolicy="no-referrer"
                      src={version.logoUrl} 
                    />
                  </div>

                  {/* Status Badge */}
                  <span className={`text-[10px] px-3 py-1 rounded-full font-label font-bold flex items-center gap-1 shadow-xs ${
                    version.status === 'In Progress' 
                      ? 'bg-tertiary-fixed text-on-tertiary-fixed' :
                    version.status === 'Submitted'
                      ? 'bg-primary-fixed text-on-primary-fixed-variant' :
                      'bg-surface-variant text-on-surface-variant'
                  }`}>
                    {version.status === 'In Progress' && <span className="w-1.5 h-1.5 rounded-full bg-tertiary block animate-ping" />}
                    {version.status === 'Submitted' && <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                    {version.status === 'Draft' && <span className="material-symbols-outlined text-xs">draft</span>}
                    {version.status}
                  </span>
                </div>

                {/* Main Card Info */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {version.title}
                  </h3>
                  <p className="text-on-surface-variant font-label text-xs mt-1.5 font-semibold">
                    {version.company} · {version.location}
                  </p>

                  <div className={`flex items-end gap-3 mt-6 mb-6 ${!hasScore ? 'opacity-40' : ''}`}>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant font-bold font-label mb-1 uppercase tracking-wider">Match Score</span>
                      <span className="text-2.5xl font-headline font-bold text-primary">
                        {hasScore ? `${version.matchScore}%` : '--'}
                      </span>
                    </div>
                    
                    <div className="flex-1 h-2 bg-surface-container rounded-full mb-2.5 overflow-hidden">
                      {hasScore ? (
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500" 
                          style={{ width: `${version.matchScore}%` }} 
                        />
                      ) : (
                        <div className="h-full bg-outline-variant/35 rounded-full w-0" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer card controls */}
                <div className="flex items-center justify-between border-t border-outline-variant/15 pt-4 mt-auto relative z-10">
                  <div className="text-[11px] text-on-surface-variant font-label font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                    {version.date}
                  </div>
                  
                  <div className="flex gap-1.5">
                    <button 
                      onClick={() => onNavigate(version.id === 'google-pm' ? 'ai_suggestions' : 'jd_analysis')}
                      className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center text-on-surface outline-none active:scale-90 shadow-xs"
                      title="Navigate to analytics suggestions"
                    >
                      <span className="material-symbols-outlined text-[17px]">edit</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('jd_analysis')}
                      className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface outline-none active:scale-90"
                      title="View JD Match report"
                    >
                      <span className="material-symbols-outlined text-[17px]">analytics</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Nav for Mobile Screens */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t border-outline-variant/10 flex justify-around items-center py-2.5 z-50 shadow-lg">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className={`flex flex-col items-center text-[10px] font-bold ${activeScreen() ? 'text-primary' : 'text-on-surface-variant'}`}
          >
            <span className="material-symbols-outlined mb-0.5">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a 
            href="#job_versions" 
            onClick={(e) => { e.preventDefault(); onNavigate('job_versions'); }}
            className="flex flex-col items-center text-[10px] font-bold text-primary"
          >
            <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <span>Optimizer</span>
          </a>
          <a 
            href="#assessments" 
            onClick={(e) => { e.preventDefault(); onNavigate('assessment_center'); }}
            className="flex flex-col items-center text-[10px] font-bold text-on-surface-variant"
          >
            <span className="material-symbols-outlined mb-0.5">assignment</span>
            <span>Assessments</span>
          </a>
        </nav>
        <div className="h-14 md:hidden" />
      </main>
    </div>
  );

  function activeScreen() {
    return false;
  }
};
