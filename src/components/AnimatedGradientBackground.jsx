import React from 'react';

// Simple animated gradient background
const AnimatedGradientBackground = () => (
  <svg
    width="100vw"
    height="100vh"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      display: 'block',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#23243a">
          <animate attributeName="stop-color" values="#23243a;#6d5dfc;#23243a" dur="10s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" stopColor="#6d5dfc">
          <animate attributeName="stop-color" values="#6d5dfc;#23243a;#6d5dfc" dur="10s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)" />
  </svg>
);

export default AnimatedGradientBackground;
