import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div
          className="hero-gradient-1"
          style={{
            transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`
          }}
        />
        <div
          className="hero-gradient-2"
          style={{
            transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`
          }}
        />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-text animate-float" style={{ animationDelay: '0s' }}>
          <div className="hero-greeting">Hi there, I am</div>
          <h1 className="hero-title">
            <span className="gradient-text">Shubham Modi</span>
          </h1>
          <h2 className="hero-subtitle">
            Computer Science Student & Full Stack Developer
          </h2>
          <p className="hero-desc">
            Passionate about creating innovative web solutions and turning ideas into reality.
            I love building user-friendly applications and exploring new technologies with a focus on modern, scalable architecture.
          </p>

          <div className="hero-actions">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="btn-primary">
                View My Work
              </button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="btn-outline">
                Get In Touch
              </button>
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Modi6090" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/shubham-modi-203141253" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin />
            </a>
            <a href="mailto:shubhammodi2003@gmail.com" className="social-link">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float" style={{ animationDelay: '2s' }}>
          <div className="hero-visual-inner glass-panel">
            <div className="orbit-circle orbit-circle-1" />
            <div className="orbit-circle orbit-circle-2" />
            <div className="orbit-circle orbit-circle-3" />

            <div className="tech-icon-wrapper tech-icon-1"><FaReact /></div>
            <div className="tech-icon-wrapper tech-icon-2"><FaNodeJs /></div>
            <div className="tech-icon-wrapper tech-icon-3"><FaPython /></div>

            <div className="hero-avatar">
              👨‍💻
            </div>
          </div>
        </div>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel" />
          </div>
          Scroll
        </div>
      </Link>
    </section>
  );
};

export default Hero;
