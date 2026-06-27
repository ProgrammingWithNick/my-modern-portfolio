import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="h-[70vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-9xl font-black text-neutral-800 tracking-tighter mb-4">404</h1>
        <p className="text-neutral-400 mb-8 font-mono">Requested route node does not exist in network topology.</p>
        <Link to="/" className="px-6 h-12 rounded-xl border border-neutral-800 bg-neutral-900 text-white font-medium flex items-center justify-center">
          Return to Core Index
        </Link>
      </div>
    </PageTransition>
  );
};
export default NotFound;