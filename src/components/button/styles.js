import styled from 'styled-components';


export const MyButton = styled.button`
  background-color: transparent;
  border: 2px solid #0ff;
  color: #121314;
  font-size: 1.5rem;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50px;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #00f, 0 0 20px #00f;
  box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #00f, 0 0 20px #00f;
  transition: all 0.3s ease-in-out;
  animation: flicker 1.5s infinite alternate;

  &:hover {
    background-color: #0ff;
    color: #000;
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00f, 0 0 40px #00f;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
      text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #00f, 0 0 20px #00f;
    }
    100% {
      opacity: 0.8;
      text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #00f, 0 0 40px #00f;
    }
  }
`;