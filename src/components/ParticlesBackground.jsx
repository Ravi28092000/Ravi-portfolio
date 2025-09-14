import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 60;
const COLORS = ['#6d5dfc', '#46caff', '#ff6ec4', '#ffd86f'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticle(width, height) {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    r: randomBetween(8, 24),
    dx: randomBetween(-0.5, 0.5),
    dy: randomBetween(-0.3, 0.3),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: randomBetween(0.15, 0.35),
  };
}

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height));
    }
    window.addEventListener('resize', resize);
    resize();

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -p.r || p.x > width + p.r || p.y < -p.r || p.y > height + p.r) {
          Object.assign(p, createParticle(width, height));
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticlesBackground;
