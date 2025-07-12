import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PROTECTED_ROUTES = [
  '/dashboard',
  '/reports',
  '/settings', 
  '/chat',
  '/profile'
];

const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/register',
  '/features',
  '/docs',
  '/about',
  '/pricing'
];

export const useRouteAuth = () => {
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  
  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = lastPath.current;
    
    if (currentPath !== previousPath) {
      const isCurrentProtected = PROTECTED_ROUTES.some(route => 
        currentPath.startsWith(route)
      );
      const isPreviousProtected = PROTECTED_ROUTES.some(route => 
        previousPath.startsWith(route)
      );
      
      console.log(`🔄 Route change: ${previousPath} → ${currentPath}`);
      console.log(`📊 Protected: ${isPreviousProtected} → ${isCurrentProtected}`);
      
      lastPath.current = currentPath;
    }
  }, [location]);
  
  const isProtectedRoute = (path = location.pathname) => {
    return PROTECTED_ROUTES.some(route => path.startsWith(route));
  };
  
  const isPublicRoute = (path = location.pathname) => {
    return PUBLIC_ROUTES.some(route => path === route);
  };
  
  const shouldCheckAuth = (path = location.pathname) => {
    return isProtectedRoute(path);
  };
  
  return {
    isProtectedRoute,
    isPublicRoute,
    shouldCheckAuth,
    currentPath: location.pathname
  };
}; 