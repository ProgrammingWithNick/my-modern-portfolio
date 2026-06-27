import type { Project } from '../types';


import awsCertImage from '../assets/certificates/aws.jpeg';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Enterprise FinTech Core Platform',
    description: 'High-throughput, real-time asset ledger processing engine optimized for multi-currency transactions.',
    image: awsCertImage, // Using the imported variable here
    techStack: ['React 19', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
    features: ['Sub-10ms transactional syncing Engine', 'End-to-end Ledger cryptographical audits', 'Custom declarative UI schemas'],
    githubUrl: 'https://github.com/ProgrammingWithNick',
  }
];