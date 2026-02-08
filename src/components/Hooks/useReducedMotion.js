import { useReducedMotion } from "framer-motion";

/**
 * Custom hook that provides animation configuration based on user's
 * prefers-reduced-motion setting.
 *
 * @returns {Object} Animation configuration
 * @returns {boolean} prefersReducedMotion - Whether user prefers reduced motion
 * @returns {Object|undefined} transition - Instant transition for reduced motion, undefined otherwise
 * @returns {Object} springConfig - Spring config with 0 duration for reduced motion
 */
export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion,
    // Instant transition for reduced motion
    transition: prefersReducedMotion ? { duration: 0 } : undefined,
    // No spring physics for reduced motion
    springConfig: prefersReducedMotion ? { duration: 0 } : { duration: 3000 },
  };
}

export default useAnimationConfig;
