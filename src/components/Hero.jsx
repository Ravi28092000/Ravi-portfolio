
import { useEffect, useRef, useState } from 'react';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.animate([
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1.1)' },
        { opacity: 1, transform: 'scale(1)' }
      ], {
        duration: 1200,
        easing: 'cubic-bezier(.4,0,.2,1)',
        fill: 'forwards'
      });
    }
  }, []);

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSubtitleIndex(i => (i + 1) % 3);
        setFade(true);
      }, 350);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero" data-aos="fade-up">
      <h1 ref={nameRef}>Ravi Kiran</h1>
      <p
        style={{
          minHeight: 28,
          transition: 'opacity 0.35s, transform 0.35s',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateX(0)' : 'translateX(40px)',
          willChange: 'opacity, transform',
        }}
      >
        {[
          'Software Developer',
          'ML Enthusiast',
          'React Specialist',
        ][subtitleIndex]}
      </p>
      <div className="links">
        <a href="mailto:rkr393092@gmail.com">Email</a>
        <a href="https://github.com/Ravi28092000">GitHub</a>
        <a href="https://www.linkedin.com/in/ravi-kiran-35a7171ba/">LinkedIn</a>
      </div>
      <ResumeDownload />
    </section>
  );
};

export default Hero;
