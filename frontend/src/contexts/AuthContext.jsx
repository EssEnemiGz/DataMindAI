import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { authService } from '../lib/authService';
import { useApiMonitor } from '../hooks/useApiMonitor';
import { useRouteAuth } from '../hooks/useRouteAuth';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  
  useApiMonitor();
  
  const { shouldCheckAuth, isPublicRoute } = useRouteAuth();

  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const response = await authService.login(email, password);
      const userData = await authService.getCurrentUser();
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  useEffect(() => {
    if (hasCheckedAuth) return;
    
    const checkAuth = async () => {
      if (isPublicRoute()) {
        console.log('📄 Public route detected, skipping auth check');
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        setHasCheckedAuth(true);
        return;
      }
      
      if (!shouldCheckAuth()) {
        console.log('📄 Non-protected route, skipping auth check');
        setUser(null);
        setIsAuthenticated(false);
        setIsLoading(false);
        setHasCheckedAuth(true);
        return;
      }
      
      try {
        console.log('🔐 Checking authentication...');
        const userData = await authService.getCurrentUser();
        if (userData) {
          setUser(userData);
          setIsAuthenticated(true);
          console.log('✅ User authenticated:', userData.email);
        } else {
          setUser(null);
          setIsAuthenticated(false);
          console.log('❌ No user found');
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
        console.log('❌ Auth check failed:', error.message);
      } finally {
        setIsLoading(false);
        setHasCheckedAuth(true);
      }
    };

    checkAuth();
  }, [hasCheckedAuth, isPublicRoute, shouldCheckAuth]);

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  }), [user, isAuthenticated, isLoading, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 