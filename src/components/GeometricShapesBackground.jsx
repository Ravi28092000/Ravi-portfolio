import React from 'react';

// Floating geometric shapes background
const SHAPE_COUNT = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const shapes = Array.from({ length: SHAPE_COUNT }).map((_, i) => {
  const type = Math.random() > 0.5 ? 'circle' : 'rect';
  return {
    type,
    x: randomBetween(0, WIDTH),
    y: randomBetween(0, HEIGHT),
    size: randomBetween(18, 60),
    color: `hsl(${randomBetween(200, 300)}, 80%, 70%)`,
    delay: randomBetween(0, 4),
    duration: randomBetween(8, 16),
    rotate: randomBetween(0, 360),
  };
});

const GeometricShapesBackground = () => (
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
      display: 'block',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {shapes.map((shape, i) => (
      shape.type === 'circle' ? (
        <circle
          key={i}
          cx={shape.x}
          cy={shape.y}
          r={shape.size / 2}
          fill={shape.color}
          opacity={0.18}
          style={{
            animation: `floatShape ${shape.duration}s ${shape.delay}s infinite alternate`,
          }}
        />
      ) : (
        <rect
          key={i}
          x={shape.x}
          y={shape.y}
          width={shape.size}
          height={shape.size}
          fill={shape.color}
          opacity={0.13}
          rx={shape.size * 0.3}
          style={{
            transform: `rotate(${shape.rotate}deg)`,
            animation: `floatShape ${shape.duration}s ${shape.delay}s infinite alternate`,
          }}
        />
      )
    ))}
    <style>{`
      @keyframes floatShape {
        0% { transform: translateY(0); }
        100% { transform: translateY(-40px); }
      }
    `}</style>
  </svg>
);

export default GeometricShapesBackground;
