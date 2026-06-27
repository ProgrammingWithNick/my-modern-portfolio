import type { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', iconName: 'Layers', efficiency: 95 },
      { name: 'TypeScript', iconName: 'Code', efficiency: 92 },
      { name: 'Tailwind CSS', iconName: 'Wind', efficiency: 98 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js / Express', iconName: 'Cpu', efficiency: 90 },
      { name: 'NestJS', iconName: 'Terminal', efficiency: 85 }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', iconName: 'Database', efficiency: 88 },
      { name: 'MySQL / Postgres', iconName: 'Server', efficiency: 86 }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git & GitHub', iconName: 'GitBranch', efficiency: 94 },
      { name: 'Docker', iconName: 'Box', efficiency: 80 },
      { name: 'Figma (UI/UX)', iconName: 'Figma', efficiency: 85 }
    ]
  }
];