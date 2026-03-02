import { useEffect, useState } from 'react';
import './_ProgressBar.scss';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const totalScrollableDistance = documentHeight - windowHeight;
      const percentage = (scrollPosition / totalScrollableDistance) * 100;

      setScrollProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ProgressBar">
      <div
        className="ProgressBar__fill"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
    </div>
  );
}

export default ProgressBar;