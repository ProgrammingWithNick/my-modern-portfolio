export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
}

export interface SkillGroup {
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  skills: { name: string; iconName: string; efficiency: number }[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  downloadPath: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
}