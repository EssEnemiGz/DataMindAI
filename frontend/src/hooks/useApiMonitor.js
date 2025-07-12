import { useEffect, useRef } from 'react';

export const useApiMonitor = () => {
  const callCount = useRef(0);
  const lastCallTime = useRef(0);
  const warningShown = useRef(false);

  useEffect(() => {
    const originalFetch = window.fetch;
    const originalXHROpen = window.XMLHttpRequest.prototype.open;

    window.fetch = function(...args) {
      const url = args[0];
      if (typeof url === 'string' && url.includes('/api/v1/me')) {
        callCount.current++;
        const now = Date.now();
        
        if (now - lastCallTime.current < 10000) {
          if (callCount.current > 5 && !warningShown.current) {
            console.warn('🚨 WARNING: Many calls to /me detected! This might indicate a loop.');
            console.warn(`📊 Stats: ${callCount.current} calls in ${Math.round((now - lastCallTime.current) / 1000)}s`);
            warningShown.current = true;
            
            setTimeout(() => {
              warningShown.current = false;
              callCount.current = 0;
            }, 30000);
          }
        } else {
          callCount.current = 1;
        }
        
        lastCallTime.current = now;
      }
      
      return originalFetch.apply(this, args);
    };

    window.XMLHttpRequest.prototype.open = function(method, url, ...args) {
      if (typeof url === 'string' && url.includes('/api/v1/me')) {
        callCount.current++;
        const now = Date.now();
        
        if (now - lastCallTime.current < 10000) {
          if (callCount.current > 5 && !warningShown.current) {
            console.warn('🚨 WARNING: Many calls to /me detected! This might indicate a loop.');
            console.warn(`📊 Stats: ${callCount.current} calls in ${Math.round((now - lastCallTime.current) / 1000)}s`);
            warningShown.current = true;
            
            setTimeout(() => {
              warningShown.current = false;
              callCount.current = 0;
            }, 30000);
          }
        } else {
          callCount.current = 1;
        }
        
        lastCallTime.current = now;
      }
      
      return originalXHROpen.apply(this, [method, url, ...args]);
    };

    return () => {
      window.fetch = originalFetch;
      window.XMLHttpRequest.prototype.open = originalXHROpen;
    };
  }, []);

  return {
    getCallCount: () => callCount.current,
    resetCallCount: () => {
      callCount.current = 0;
      warningShown.current = false;
    }
  };
}; 