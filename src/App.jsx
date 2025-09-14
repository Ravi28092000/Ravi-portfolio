export default App;



import './App.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import SVGStarsBackground from './components/SVGStarsBackground';
import AnimatedGradientBackground from './components/AnimatedGradientBackground';
import GeometricShapesBackground from './components/GeometricShapesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import useAOS from './hooks/useAOS';
import { useEffect, useState } from 'react';
function App() {
  useAOS();

  const [showTop, setShowTop] = useState(false);
  const [bgType, setBgType] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bgType') || 'particles';
    }
    return 'particles';
  });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Persist bgType in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bgType', bgType);
    }
  }, [bgType]);

  const backgrounds = {
    particles: <ParticlesBackground />,
    stars: <SVGStarsBackground />,
    gradient: <AnimatedGradientBackground />,
    shapes: <GeometricShapesBackground />,
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {backgrounds[bgType]}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        {/* Background Toggle - sticky below navbar */}
        <div style={{
          position: 'sticky',
          top: 70,
          right: 0,
          zIndex: 1001,
          background: 'rgba(35,36,58,0.85)',
          borderRadius: 12,
          padding: '0.5rem 1rem',
          boxShadow: '0 2px 12px #6d5dfc22',
          display: 'flex',
          gap: 8,
          margin: '0 0 1.5rem auto',
          width: 'fit-content',
        }}>
          <span style={{ color: '#fff', fontWeight: 600, marginRight: 8 }}>Background:</span>
          <select
            value={bgType}
            onChange={e => setBgType(e.target.value)}
            style={{ borderRadius: 8, padding: '0.2rem 0.7rem', fontWeight: 500 }}
            aria-label="Select background style"
          >
            <option value="particles">Bubbles/Particles</option>
            <option value="stars">Stars/Space</option>
            <option value="gradient">Animated Gradient</option>
            <option value="shapes">Geometric Shapes</option>
          </select>
        </div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        {/* Floating Back to Top Button */}
        {showTop && (
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to Top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}
