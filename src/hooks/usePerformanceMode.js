import { useState, useEffect, useCallback } from 'react';

export function usePerformanceMode() {
  const [perfMode, setPerfMode] = useState(() => {
    try {
      return localStorage.getItem('ww_perf_mode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ww_perf_mode', String(perfMode));
    } catch {
      // Ignore localStorage errors
    }
    if (perfMode) {
      document.body.classList.add('perf-mode-active');
    } else {
      document.body.classList.remove('perf-mode-active');
    }
  }, [perfMode]);

  const togglePerfMode = useCallback(() => {
    setPerfMode(prev => !prev);
  }, []);

  return {
    perfMode,
    togglePerfMode
  };
}
