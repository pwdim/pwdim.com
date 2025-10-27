import React, { createContext, useState, useEffect } from 'react';
// Importe o ThemeProvider do styled-components (e crie os objetos de tema)
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; 

export const ThemeContext = createContext();

// Defina os objetos de tema aqui
const darkTheme = {
  colors: {
    smoke: '220, 220, 220', // Cinza claro para fumaça no fundo escuro
    // ... outras cores que você usa
  },
  mode: 'dark',
};

const lightTheme = {
  colors: {
    smoke: '50, 50, 50',    // Cinza escuro para fumaça no fundo claro
    // ... outras cores que você usa
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
      {/* IMPORTANTE: Envolve a aplicação no ThemeProvider do styled-components, 
        passando o objeto de tema com a cor da fumaça.
      */}
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};