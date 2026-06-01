import React from 'react';
import { ScreenId } from '../types';

interface AssessmentCenterProps {
  onNavigate: (screen: ScreenId) => void;
}

export const AssessmentCenter: React.FC<AssessmentCenterProps> = ({ onNavigate }) => {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      {/* Header section */}
      <section className="mb-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-headline font-bold text-primary mb-2">Resume Assessment</h1>
            <p className="text-on-surface-variant text-base md:text-lg">A comprehensive health check for your professional narrative.</p>
          </div>
          {/* Bulletproof Navigation helper block */}
          <div className="bg-primary-fixed/20 border border-primary-fixed-dim/40 px-4 py-3 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            <div className="text-xs">
              <span className="font-bold text-on-primary-fixed">Ready to refine this draft?</span>
              <p className="text-on-surface-variant mt-0.5">
                Go to the customized <a href="#job_versions" onClick={(e) => { e.preventDefault(); onNavigate('job_versions'); }} className="text-primary hover:underline font-bold underline">Optimizer</a> to align with top roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Overall Score & Standardization Checks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
        {/* Overall Score Circle (Span 1) */}
        <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-outline-variant/10 shadow-sm md:col-span-1 h-full min-h-[340px]">
          <div className="relative w-36 h-36 flex items-center justify-center mb-6">
            {/* Elegant Circular Score Border */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--color-surface-container)" strokeWidth="6" />
              <circle 
                cx="50" cy="50" r="44" fill="none" 
                stroke="var(--color-primary)" strokeWidth="6" 
                strokeDasharray="276.4" strokeDashoffset="41.4" // Dash offset represented 15% missing for score 85
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-5xl font-headline font-bold text-primary">85</span>
            </div>
          </div>

          <h2 className="text-xl font-headline font-bold text-on-surface mb-2">Overall Health Score</h2>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4 max-w-xs">
            Your resume is strong, but a few tweaks can elevate its impact.
          </p>
          <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-xs">
            Good
          </span>
        </div>

        {/* Standardization Check Details (Span 2) */}
        <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/10 shadow-sm md:col-span-2 h-full min-h-[340px] flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-tertiary text-2.5xl" style={{ fontVariationSettings: "'FILL' 1" }}>rule</span>
            <h2 className="text-xl font-headline font-bold text-on-surface">Standardization Check</h2>
          </div>
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
            Ensuring ATS compatibility and professional formatting conventions.
          </p>
          
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {/* Checked Item 1 */}
            <div className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-outline-variant/10 transition-colors hover:border-primary/25">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-on-surface">Contact Information</h3>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">All essential details present and correctly formatted.</p>
              </div>
            </div>

            {/* Warn/Error Item 2 */}
            <div className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-outline-variant/10 transition-colors hover:border-error/25">
              <span className="material-symbols-outlined text-error text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-on-surface">Education Format</h3>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Dates should be right-aligned for better readability by parsers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bars: Content Quality Analysis */}
      <section className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/10 shadow-sm animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-2.5xl">edit_note</span>
          <h2 className="text-xl font-headline font-bold text-on-surface">Content Quality Analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Action Verbs Bar (Left side) */}
          <div className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-tertiary text-[18px]">bolt</span>
                Action Verbs
              </h3>
              <div className="w-full bg-surface-container rounded-full h-2.5 mb-4 overflow-hidden shadow-inner">
                <div className="bg-primary h-full rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              70% of bullet points start with strong action verbs. Consider upgrading words like "helped" or "worked on".
            </p>
          </div>

          {/* Quantification Bar (Right side) */}
          <div className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm text-on-surface flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-tertiary text-[18px]">trending_up</span>
                Quantification
              </h3>
              <div className="w-full bg-surface-container rounded-full h-2.5 mb-4 overflow-hidden shadow-inner">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Only 45% of your achievements include metrics. Add numbers to demonstrate tangible impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
