import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as S from './styles';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.Switch className="switch">
      <S.SwitchInput
        id="input"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <S.Slider className="slider round">
        <S.SunMoon className="sun-moon">
          <S.MoonDot id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.MoonDot>
          <S.MoonDot id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.MoonDot>
          <S.MoonDot id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.MoonDot>
          <S.LightRay id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.LightRay>
          <S.LightRay id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.LightRay>
          <S.LightRay id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.LightRay>
          <S.CloudDark id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudDark>
          <S.CloudDark id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudDark>
          <S.CloudDark id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudDark>
          <S.CloudLight id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudLight>
          <S.CloudLight id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudLight>
          <S.CloudLight id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" />
          </S.CloudLight>
        </S.SunMoon>
        <S.Stars className="stars">
          <S.Star id="star-1" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </S.Star>
          <S.Star id="star-2" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </S.Star>
          <S.Star id="star-3" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </S.Star>
          <S.Star id="star-4" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
          </S.Star>
        </S.Stars>
      </S.Slider>
    </S.Switch>
  );
};

export default ThemeToggle;