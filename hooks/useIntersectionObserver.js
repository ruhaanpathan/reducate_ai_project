import { useEffect, useState } from 'react';

/**
 * 🚀 High-Fidelity Custom useIntersectionObserver Hook
 * Detects viewport intersection and statefully manages entry trigger locks.
 * 
 * @param {React.RefObject} ref - Target element ref to observe.
 * @param {Object} options - Intersection observer options.
 * @param {number} options.threshold - Viewport intersection trigger threshold (default 0.05).
 * @param {boolean} options.triggerOnce - Whether the trigger should lock on true once intersected (default true).
 * @returns {boolean} isVisible - Viewport visibility state.
 */
export default function useIntersectionObserver(ref, options = {}) {
  const { threshold = 0.05, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!triggerOnce) {
          setIsVisible(false);
        }
      }
    }, { threshold });

    const currentTarget = ref.current;
    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      observer.disconnect();
    };
  }, [ref, threshold, triggerOnce]);

  return isVisible;
}
