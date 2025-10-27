import React, { useRef, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
`;

const SmokeBackground = () => {
  const canvasRef = useRef(null);
  const theme = useContext(ThemeContext); 
  
  // O componente lê o objeto de tema completo (darkTheme ou lightTheme)
  const particleColor = theme?.colors?.smoke || '255, 255, 255'; 

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
        this.color = `rgba(${particleColor}, ${this.opacity})`; 
      }

      update() {
        this.x += this.speedX + (mouseX - this.x) * 0.001; 
        this.y += this.speedY + (mouseY - this.y) * 0.001;

        this.opacity *= 0.99; 
        this.size *= 0.995; 

        if (this.opacity < 0.01 || this.size < 0.1) {
          this.reset();
        }

        this.color = `rgba(${particleColor}, ${this.opacity})`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50; 
        this.size = Math.random() * 5 + 5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = -(Math.random() * 2 + 1); 
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
  }, [particleColor]);

  return <Canvas ref={canvasRef} />;
};

export default SmokeBackground;