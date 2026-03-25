import styled from 'styled-components';

export const Switch = styled.label`
  /* Posicionamento Flutuante */
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #282c34; /* Fundo escuro padrão */
  transition: 0.4s;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: #f6f1d5;
    transition: 0.4s;
    border-radius: 50%;
    /* Sombra interna para parecer uma lua quando no dark mode */
    box-shadow: inset -4px -2px 0px 0px #d1ccb2;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  /* Estilo quando checado (Light Mode) */
  &:checked + ${Slider} {
    background-color: #87ceeb; /* Cor de céu */
    box-shadow: 0 4px 10px rgba(135, 206, 235, 0.5);
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px);
    background-color: #ffdb58; /* Cor de sol */
    box-shadow: 0 0 15px #ffdb58;
  }

  /* Foco para acessibilidade */
  &:focus + ${Slider} {
    outline: 2px solid #4285f4;
    outline-offset: 2px;
  }
`;