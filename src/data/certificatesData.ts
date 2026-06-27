import type { Certificate } from '../types';

// Import your certificate images directly from your source files
import awsCertImage from '../assets/certificates/aws.jpeg';

export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'Jan 2026',
    image: awsCertImage, // Using the imported variable here
    downloadPath: awsCertImage, // Using the imported variable here
  }
];