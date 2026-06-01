export type ScreenId = 'home' | 'assessment_center' | 'ai_suggestions' | 'jd_analysis' | 'job_versions';

export interface ResumeVersion {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  location: string;
  status: 'In Progress' | 'Submitted' | 'Draft';
  matchScore?: number;
  date: string;
}

export interface SkillGapItem {
  id: string;
  name: string;
  status: 'core_missing' | 'partial_missing' | 'highly_match';
  score: number;
  description: string;
}

export interface KeywordItem {
  name: string;
  status: 'match' | 'partial' | 'missing';
}

export interface OptimizationSuggestion {
  id: string;
  category: 'experience' | 'skill' | 'phrasing';
  locationLabel: string;
  summary: string;
  originalText?: string;
  optimizedText?: string;
  currentSkills?: string[];
  suggestedSkills?: string[];
  accepted: boolean;
  ignored: boolean;
}
