import { ResumeVersion, SkillGapItem, KeywordItem, OptimizationSuggestion } from './types';

export const initialVersions: ResumeVersion[] = [
  {
    id: 'google-pm',
    title: '产品经理',
    company: 'Google',
    logoUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=80&h=80&q=80',
    location: 'Mountain View (Remote)',
    status: 'In Progress',
    matchScore: 85,
    date: 'Oct 24, 2023',
  },
  {
    id: 'tiktok-ops',
    title: '运营专家',
    company: 'TikTok',
    logoUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=80&h=80&q=80',
    location: 'Singapore',
    status: 'Submitted',
    matchScore: 92,
    date: 'Oct 15, 2023',
  },
  {
    id: 'bytedance-pm',
    title: '高级产品经理',
    company: 'ByteDance',
    logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=80&h=80&q=80',
    location: 'Beijing',
    status: 'Draft',
    matchScore: undefined,
    date: 'Just now',
  },
];

export const skillGapItems: SkillGapItem[] = [
  {
    id: 'agile',
    name: '敏捷开发方法',
    status: 'core_missing',
    score: 20,
    description: '职位描述中提及“Scrum”和“看板” 4 次。您的简历近期职位中缺乏对这些框架的明确提及。',
  },
  {
    id: 'data-driven',
    name: '数据驱动决策',
    status: 'partial_missing',
    score: 50,
    description: '您提到了数据分析，但在上一个职位中缺乏与数据分析相关的具体指标或结果。',
  },
  {
    id: 'cross-functional',
    name: '跨职能团队领导力',
    status: 'highly_match',
    score: 95,
    description: '简历中多次详述跨团队合作经验，并有带领跨职能小组按时交付产品的卓越成果。',
  },
];

export const hardKeywords: KeywordItem[] = [
  { name: '产品策略', status: 'match' },
  { name: '路线图规划', status: 'match' },
  { name: 'A/B 测试', status: 'missing' },
  { name: 'SQL', status: 'match' },
  { name: 'Figma', status: 'partial' },
  { name: 'Jira', status: 'match' },
];

export const softKeywords: KeywordItem[] = [
  { name: '沟通能力', status: 'match' },
  { name: '冲突解决', status: 'missing' },
  { name: '利益相关者管理', status: 'match' },
  { name: '适应能力', status: 'match' },
];

export const cultureKeywords: KeywordItem[] = [
  { name: '以用户为中心', status: 'match' },
  { name: '创新', status: 'match' },
  { name: '快速试错', status: 'partial' },
  { name: '协作', status: 'match' },
];

export const initialSuggestions: OptimizationSuggestion[] = [
  {
    id: 'suggest-1',
    category: 'experience',
    locationLabel: '工作经历 > 产品经理',
    summary: '缺乏具体的数据支撑，建议加入具体指标来衡量项目影响。',
    originalText: '负责主导公司新一代SaaS产品的需求分析和设计工作，提升了产品体验，并与开发团队紧密配合，保证了项目按时上线。',
    optimizedText: '负责主导公司新一代SaaS产品的需求分析 and 设计工作，将用户核心操作路径缩短30%，NPS评分提升15分；与开发团队实施敏捷迭代，确保V1.0版本提前2周顺利交付。',
    accepted: false,
    ignored: false,
  },
  {
    id: 'suggest-2',
    category: 'skill',
    locationLabel: '技能清单',
    summary: "目标JD高频要求 “敏捷开发” 和 “数据分析工具”，您的简历中未明显体现。",
    currentSkills: ['产品设计', '项目管理', '需求调研'],
    suggestedSkills: ['产品设计', '项目管理', 'Agile/Scrum', 'SQL/Tableau'],
    accepted: false,
    ignored: false,
  },
  {
    id: 'suggest-3',
    category: 'phrasing',
    locationLabel: '自我评价',
    summary: '使用更具冲击力的专业词汇替换平淡的表述，彰显专业度。',
    originalText: '我是一个工作认真负责的人，能够很好地完成领导交代的任务，并且愿意学习新的知识。',
    optimizedText: '具备高度的责任心与执行力，能够独立驱动项目落地并交付卓越成果；拥有持续的自我驱动力与快速学习能力，能迅速适应新兴技术与业务场景。',
    accepted: false,
    ignored: false,
  },
];
