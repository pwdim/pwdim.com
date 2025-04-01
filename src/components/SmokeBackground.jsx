import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Garante que a fumaça fique atrás do conteúdo */
`;

const SmokeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const numParticles = 70;
    let mouseX = width / 2;
    let mouseY = height / 2;

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(20, 21, 22, ${this.opacity})`; // Cor da fumaça, ajustada para o seu fundo
      }

      update() {
        this.x += this.speedX + (mouseX - this.x) * 0.001; // Interação com o mouse
        this.y += this.speedY + (mouseY - this.y) * 0.001;

        this.opacity *= 0.99; // Fade out da fumaça
        this.size *= 0.995; // Diminuir o tamanho

        if (this.opacity < 0.01 || this.size < 0.1) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50; // Começa de baixo
        this.size = Math.random() * 5 + 5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = -(Math.random() * 2 + 1); // Move para cima
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(Math.random() * width, Math.random() * height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default SmokeBackground;