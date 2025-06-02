import React, { useEffect, useState } from 'react';

const CursorTipGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full z-50 shadow-[0_0_15px_6px_rgba(255,255,255,0.5)]
      bg-[conic-gradient(at_center,_red,_orange,_yellow,_lime,_cyan,_blue,_indigo,_violet,_red)]"
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    ></div>
  );
};

export default CursorTipGlow;
