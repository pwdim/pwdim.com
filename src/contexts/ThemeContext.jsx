import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; 

export const ThemeContext = createContext();

const darkTheme = {
  colors: {
    smoke: '220, 220, 220', 
  },
  mode: 'dark',
};

const lightTheme = {
  colors: {
    smoke: '50, 50, 50',    
  },
  mode: 'light',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'light' ? 'light-mode' : '';
  }, [theme]);
  
  // Seleciona o objeto de tema correto
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};