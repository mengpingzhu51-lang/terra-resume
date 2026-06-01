'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ResumeVersion, OptimizationSuggestion } from '../types';
import { initialVersions, initialSuggestions, skillGapItems, hardKeywords, softKeywords, cultureKeywords } from '../data';

interface AppContextType {
  versions: ResumeVersion[];
  suggestions: OptimizationSuggestion[];
  skillGaps: typeof skillGapItems;
  hardKeywords: typeof hardKeywords;
  softKeywords: typeof softKeywords;
  cultureKeywords: typeof cultureKeywords;
  createVersion: () => void;
  acceptItem: (id: string) => void;
  ignoreItem: (id: string) => void;
  acceptAll: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [versions, setVersions] = useState<ResumeVersion[]>(initialVersions);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>(initialSuggestions);

  const createVersion = useCallback(() => {
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
    setVersions(prev => [newVersion, ...prev]);
  }, []);

  const acceptItem = useCallback((id: string) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, accepted: true } : s));
  }, []);

  const ignoreItem = useCallback((id: string) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, ignored: true } : s));
  }, []);

  const acceptAll = useCallback(() => {
    setSuggestions(prev => prev.map(s => ({ ...s, accepted: true })));
  }, []);

  return (
    <AppContext.Provider value={{
      versions,
      suggestions,
      skillGaps: skillGapItems,
      hardKeywords,
      softKeywords,
      cultureKeywords,
      createVersion,
      acceptItem,
      ignoreItem,
      acceptAll,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
