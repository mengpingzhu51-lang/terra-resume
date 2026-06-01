import { useState } from 'react';
import { ScreenId, ResumeVersion, OptimizationSuggestion } from './types';
import { initialVersions, skillGapItems, hardKeywords, softKeywords, cultureKeywords, initialSuggestions } from './data';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AssessmentCenter } from './components/AssessmentCenter';
import { AISuggestions } from './components/AISuggestions';
import { JDAnalysis } from './components/JDAnalysis';
import { JobVersions } from './components/JobVersions';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [versions, setVersions] = useState<ResumeVersion[]>(initialVersions);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>(initialSuggestions);

  // Create customized draft template action
  const handleCreateVersion = () => {
    const newId = `custom-pm-${Date.now()}`;
    const newVersion: ResumeVersion = {
      id: newId,
      title: '高阶算法产品经理',
      company: 'Ant Group',
      logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=80&h=80&q=80',
      location: 'Hangzhou (Hybrid)',
      status: 'Draft',
      matchScore: 75,
      date: 'Just now',
    };
    setVersions([newVersion, ...versions]);
  };

  // Optimization Acceptance actions
  const handleAcceptItem = (id: string) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, accepted: true } : s));
  };

  const handleIgnoreItem = (id: string) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, ignored: true } : s));
  };

  const handleAcceptAll = () => {
    setSuggestions(prev => prev.map(s => ({ ...s, accepted: true })));
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <Layout activeScreen={currentScreen} onNavigate={handleNavigate}>
      <div className="flex-grow flex flex-col">
        {currentScreen === 'home' && (
          <Home 
            versions={versions} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentScreen === 'assessment_center' && (
          <AssessmentCenter 
            onNavigate={handleNavigate} 
          />
        )}
        {currentScreen === 'ai_suggestions' && (
          <AISuggestions 
            suggestions={suggestions} 
            onNavigate={handleNavigate}
            onAcceptAll={handleAcceptAll}
            onAcceptItem={handleAcceptItem}
            onIgnoreItem={handleIgnoreItem}
          />
        )}
        {currentScreen === 'jd_analysis' && (
          <JDAnalysis 
            skillGaps={skillGapItems}
            hardKeywords={hardKeywords}
            softKeywords={softKeywords}
            cultureKeywords={cultureKeywords}
            onNavigate={handleNavigate}
          />
        )}
        {currentScreen === 'job_versions' && (
          <JobVersions 
            versions={versions}
            onCreateVersion={handleCreateVersion}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </Layout>
  );
}
