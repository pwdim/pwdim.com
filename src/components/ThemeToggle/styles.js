import styled, { keyframes } from 'styled-components';

export const rotateCenter = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const cloudMove = keyframes`
  0% {
    transform: translateX(0px);
  }
  40% {
    transform: translateX(4px);
  }
  80% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const starTwinkle = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: black;
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + span .sun-moon {
    transform: translateX(26px);
    background-color: white;
    animation: ${rotateCenter} 0.6s ease-in-out both;
  }

  &:checked + span .sun-moon .moon-dot {
    opacity: 1;
  }

  &:checked + span .stars {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3;
  transition: 0.4s;
  z-index: 0;
  overflow: hidden;
  border-radius: 34px;

  & .sun-moon {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: yellow;
    transition: 0.4s;
    border-radius: 50%;
  }

  & .stars {
    transform: translateY(-32px);
    opacity: 0;
    transition: 0.4s;
  }
`;

export const SunMoon = styled.div`
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: yellow;
  transition: 0.4s;
  border-radius: 50%;
`;

export const MoonDot = styled.svg`
  opacity: 0;
  transition: 0.4s;
  fill: gray;
  position: absolute;
  z-index: 4;

  &#moon-dot-1 {
    left: 10px;
    top: 3px;
    width: 6px;
    height: 6px;
  }

  &#moon-dot-2 {
    left: 2px;
    top: 10px;
    width: 10px;
    height: 10px;
  }

  &#moon-dot-3 {
    left: 16px;
    top: 18px;
    width: 3px;
    height: 3px;
  }
`;

export const LightRay = styled.svg`
  left: -8px;
  top: -8px;
  position: absolute;
  width: 43px;
  height: 43px;
  z-index: -1;
  fill: white;
  opacity: 10%;

  &#light-ray-2 {
    left: -50%;
    top: -50%;
    width: 55px;
    height: 55px;
  }

  &#light-ray-3 {
    left: -18px;
    top: -18px;
    width: 60px;
    height: 60px;
  }
`;

export const CloudLight = styled.svg`
  position: absolute;
  fill: #eee;
  animation-name: ${cloudMove};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  &#cloud-4 {
    left: 36px;
    top: 18px;
    width: 40px;
  }

  &#cloud-5 {
    left: 48px;
    top: 14px;
    width: 20px;
  }

  &#cloud-6 {
    left: 22px;
    top: 26px;
    width: 30px;
  }
`;

export const CloudDark = styled.svg`
  position: absolute;
  fill: #ccc;
  animation-name: ${cloudMove};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 1s;

  &#cloud-1 {
    left: 30px;
    top: 15px;
    width: 40px;
  }

  &#cloud-2 {
    left: 44px;
    top: 10px;
    width: 20px;
  }

  &#cloud-3 {
    left: 18px;
    top: 24px;
    width: 30px;
  }
`;

export const Stars = styled.div`
  transform: translateY(-32px);
  opacity: 0;
  transition: 0.4s;
`;

export const Star = styled.svg`
  fill: white;
  position: absolute;
  transition: 0.4s;
  animation-name: ${starTwinkle};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &#star-1 {
    width: 20px;
    top: 2px;
    left: 3px;
    animation-delay: 0.3s;
  }

  &#star-2 {
    width: 6px;
    top: 16px;
    left: 3px;
  }

  &#star-3 {
    width: 12px;
    top: 20px;
    left: 10px;
    animation-delay: 0.6s;
  }

  &#star-4 {
    width: 18px;
    top: 0px;
    left: 18px;
    animation-delay: 1.3s;
  }
`;