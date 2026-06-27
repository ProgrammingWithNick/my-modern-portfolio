import type { Project } from '../types';


import netflix from '../assets/projects/netflix.png';
import ms from '../assets/projects/ms.png';

export const projectsData: Project[] = [
  {
    id: '1',
    title: ' Netflix Clone — Built with React, TypeScript & Vite',
    description: 'A stunning Netflix Clone made with ⚡ Vite, 💙 React, and 💡 TypeScript — featuring cinematic UI animations, live search, autoplay trailers, and more.',
    image: netflix, // Using the imported variable here
    techStack: ['Vite', 'React 19', 'TypeScript'],
    features: ['Cinematic UI Animations', 'Live Search', 'Autoplay Trailers', 'Responsive Design'],
    githubUrl: 'https://github.com/ProgrammingWithNick/Netflix',
  },

  {
    id: '2',
    title: 'Mobile Shop — Built with Java, Android Studio & Firebase',
    description: 'Mobile Shop is a feature-rich e-commerce platform designed to provide seamless product management and shopping experiences.',
    image: ms, // Using the imported variable here
    techStack: ['Java', 'Android Studio', 'Firebase Console'],
    features: ['Cinematic UI Animations', 'Live Search', 'Autoplay Trailers', 'Responsive Design'],
    githubUrl: 'https://github.com/ProgrammingWithNick/MobileShop-With-AdminSide',
  },

];