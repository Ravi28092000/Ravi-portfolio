import React from 'react';

// Generates an array of random star positions and animation delays
const STAR_COUNT = 80;
const WIDTH = 1920;
const HEIGHT = 1080;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const stars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
  cx: randomBetween(0, WIDTH),
  cy: randomBetween(0, HEIGHT),
  r: randomBetween(0.7, 2.2),
  delay: randomBetween(0, 3),
  duration: randomBetween(1.5, 3.5),
}));

const SVGStarsBackground = () => (
  <svg
    width="100vw"
    height="100vh"
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(180deg, #10131a 0%, #23243a 100%)',
      display: 'block',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
    {stars.map((star, i) => (
      <circle
        key={i}
        cx={star.cx}
        cy={star.cy}
        r={star.r}
        fill="url(#star-glow)"
        style={{
          opacity: 0.7,
          animation: `twinkle ${star.duration}s ${star.delay}s infinite ease-in-out`,
        }}
      />
    ))}
    <style>{`
      @keyframes twinkle {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }
    `}</style>
  </svg>
);

export default SVGStarsBackground;
