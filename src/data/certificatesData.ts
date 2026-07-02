import type { Certificate } from '../types';

// Import your certificate images directly from your source files
import ai from '../assets/certificates/ai.jpeg';
import oracle from '../assets/certificates/oracle.png';
import aws from '../assets/certificates/aws.png';
import se from '../assets/certificates/se.png';

export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Artificial Intelligence Certification',
    organization: 'Elewayte',
    date: 'May-2026 to June-2026',
    image: ai, // Using the imported variable here
    downloadPath: ai, // Using the imported variable here
  },
  {
    id: 'cert-2',
    title: 'Database Programming With SQL Certification',
    organization: 'Oracle',
    date: 'Nov-2025',
    image: oracle, // Using the imported variable here
    downloadPath: oracle, // Using the imported variable here
  },
  {
    id: 'cert-3',
    title: 'Amazon Web Services (AWS) Certified 2022',
    organization: 'Infosys Springboard',
    date: 'June-2026',
    image: aws, // Using the imported variable here
    downloadPath: aws, // Using the imported variable here
  },
  {
    id: 'cert-4',
    title: 'Software Engineering Certification',
    organization: 'Infosys Springboard',
    date: 'July-2026',
    image: se, // Using the imported variable here
    downloadPath: se, // Using the imported variable here
  }

];