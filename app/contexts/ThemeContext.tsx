'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Function to apply theme to document with debugging
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;
    
    console.log('Applying theme:', newTheme);
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
      
      if (systemTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
        body.style.backgroundColor = '#111827'; // Force dark background
        body.style.color = '#ffffff'; // Force light text
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
        body.style.backgroundColor = '#ffffff'; // Force light background
        body.style.color = '#111827'; // Force dark text
      }
      console.log('System theme resolved to:', systemTheme);
    } else {
      setResolvedTheme(newTheme);
      
      if (newTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
        body.style.backgroundColor = '#111827'; // Force dark background
        body.style.color = '#ffffff'; // Force light text
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
        body.style.backgroundColor = '#ffffff'; // Force light background
        body.style.color = '#111827'; // Force dark text
      }
      console.log('Manual theme applied:', newTheme);
    }
    
    console.log('HTML classes after theme application:', root.className);
    console.log('Body styles after theme application:', body.style.backgroundColor, body.style.color);
  };

  // Initialize theme on mount
  useEffect(() => {
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme = savedTheme || 'light';
    
    console.log('Initial theme from localStorage:', savedTheme);
    console.log('Using initial theme:', initialTheme);
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    console.log('Setting theme to:', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    handleSetTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      resolvedTheme, 
      setTheme: handleSetTheme, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
