import styled from 'styled-components';

export const Switch = styled.label`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 30px;

  flex: 0 0 60px;

  margin: 0;

  cursor: pointer;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 54px;
    height: 28px;

    flex-basis: 54px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 26px;

    flex-basis: 50px;
  }
`;

export const Slider = styled.span`
  position: absolute;

  inset: 0;

  background-color: #282c34;

  border-radius: 30px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    position: absolute;

    content: '';

    width: 22px;
    height: 22px;

    left: 4px;
    bottom: 4px;

    border-radius: 50%;

    background-color: #f6f1d5;

    box-shadow: inset -4px -2px 0 #d1ccb2;

    transition:
      transform 0.3s ease,
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  @media (max-width: 768px) {
    &::before {
      width: 20px;
      height: 20px;

      left: 4px;
      bottom: 4px;
    }
  }

  @media (max-width: 480px) {
    &::before {
      width: 18px;
      height: 18px;

      left: 4px;
      bottom: 4px;
    }
  }
`;

export const SwitchInput = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;

  opacity: 0;

  margin: 0;

  &:checked + ${Slider} {
    background-color: #87ceeb;

    box-shadow: 0 4px 10px rgba(135, 206, 235, 0.5);
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px);

    background-color: #ffdb58;

    box-shadow: 0 0 15px #ffdb58;
  }

  &:focus-visible + ${Slider} {
    outline: 2px solid #4285f4;
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    &:checked + ${Slider}::before {
      transform: translateX(26px);
    }
  }

  @media (max-width: 480px) {
    &:checked + ${Slider}::before {
      transform: translateX(24px);
    }
  }
`;