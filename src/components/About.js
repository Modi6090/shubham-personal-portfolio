import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiBook, FiCode } from 'react-icons/fi';

const About = () => {
  const personalInfo = [
    { icon: FiUser, label: 'Age', value: '20 years' },
    { icon: FiMapPin, label: 'Location', value: 'India' },
    { icon: FiBook, label: 'Education', value: 'Computer Science Engineering' },
    { icon: FiCode, label: 'Learning Style', value: 'Self-Taught Developer' }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'First Steps in Tech',
      description: 'Discovered my passion for technology and started exploring programming concepts through online resources.'
    },
    {
      year: '2023',
      title: 'Computer Science Student',
      description: 'Started my Computer Science Engineering journey with a focus on fundamentals and problem-solving.'
    },
    {
      year: '2024',
      title: 'Web Development Journey',
      description: 'Started self-learning HTML, CSS, JavaScript and began building web applications.'
    },
    {
      year: '2025',
      title: 'Full Stack Development',
      description: 'Self-taught full-stack development using React.js, Node.js, and MongoDB.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better - my self-learning journey, passion, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid-2">
          {/* Personal Info */}
          <div className="card">
            <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>Personal Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {personalInfo.map((info, index) => (
                <div key={info.label} className="flex-start" style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div className="icon-box">
                    <info.icon />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{info.label}</div>
                    <div style={{ fontWeight: '600' }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="card">
            <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>My Story</h3>
            <div style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                I&apos;m a passionate Computer Science Engineering student and self-taught full-stack developer
                with a deep love for creating innovative web solutions. My journey in technology began with
                curiosity and has evolved into a dedicated pursuit of excellence through self-learning.
              </p>
              <p>
                I believe in the power of hands-on learning, clean code, and user-centered design.
                Every project I work on is an opportunity to push boundaries and create something
                meaningful that can make a difference in people&apos;s lives.
              </p>
              <p>
                As a self-taught developer, I&apos;ve learned to be resourceful, persistent, and always
                eager to learn new technologies. When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6">
          <h3 className="section-title mb-4" style={{ fontSize: '2rem' }}>
            My Self-Learning Journey
          </h3>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--gradient-main)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timeline.map((item, index) => (
                <div key={item.year} style={{ position: 'relative', paddingLeft: '3rem' }}>
                  {/* Timeline Dot */}
                  <div style={{ position: 'absolute', left: '-6px', top: '0', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--accent-primary)', border: '2px solid var(--bg-primary)' }} />

                  <div className="card" style={{ padding: '1.5rem' }}>
                    <div className="gradient-text mb-1" style={{ fontWeight: 'bold' }}>
                      {item.year}
                    </div>
                    <h4 className="mb-1" style={{ fontSize: '1.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
