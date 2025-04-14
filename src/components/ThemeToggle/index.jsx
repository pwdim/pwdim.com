import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as S from './styles';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.Switch>
      <S.SwitchInput
        id="theme-toggle-input"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label="Alternar tema"
      />
      <S.Slider />
    </S.Switch>
  );
};

export default ThemeToggle;