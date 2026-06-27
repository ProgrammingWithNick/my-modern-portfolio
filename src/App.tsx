import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import { LoadingScreen } from './components/LoadingScreen';

// Import your pages normally as sections
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <Layout>
            {/* All sections stacked together for a single scrollbar */}
            <main className="scroll-smooth">
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="certificates">
                <Certificates />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          </Layout>
        </Router>
      )}
    </HelmetProvider>
  );
};

export default App;