import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.4s;
  border-radius: 26px;

  &::before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: transform 0.4s;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #3c4043;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}::before {
    transform: translateX(24px);
  }

  body.light-mode & + ${Slider} {
     background-color: #bdc1c6;
  }
  body.dark-mode & + ${Slider} {
     background-color: #303134;
  }

  body.light-mode &:checked + ${Slider} {
     background-color: #4285F4;
  }
   body.dark-mode &:checked + ${Slider} {
     background-color: #8ab4f8;
   }
   body.dark-mode &:checked + ${Slider}::before {
       background-color: #202124;
   }

`;