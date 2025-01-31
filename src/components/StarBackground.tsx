import { useEffect, useRef } from 'react';

export function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'animated-star';
      
      // Random initial position
      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      // Random movement direction
      const angle = Math.random() * Math.PI * 2;
      const distance = 200 + Math.random() * 300; // Increased distance
      star.style.setProperty('--star-x', `${Math.cos(angle) * distance}px`);
      star.style.setProperty('--star-y', `${Math.sin(angle) * distance}px`);
      star.style.setProperty('--angle', `${angle}rad`);
      
      // Random size
      const size = 2 + Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 8}s`;
      
      return star;
    };

    // Create and manage stars
    const starCount = Math.floor((container.offsetWidth * container.offsetHeight) / 5000); // More stars
    let stars: HTMLDivElement[] = [];

    const createStars = () => {
      stars = Array.from({ length: starCount }, createStar);
      stars.forEach(star => container.appendChild(star));
    };

    const recreateStars = () => {
      stars.forEach(star => star.remove());
      createStars();
    };

    createStars();

    // Recreate stars periodically for continuous effect
    const interval = setInterval(recreateStars, 8000);

    // Cleanup
    return () => {
      clearInterval(interval);
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}