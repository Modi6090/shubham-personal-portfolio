import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: FiGithub, url: "https://github.com/Modi6090", color: "#8b5cf6" },
    { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/shubham-modi-203141253", color: "#3b82f6" },
    { name: "Email", icon: FiMail, url: "mailto:shubhammodi2003@gmail.com", color: "#ec4899" }
  ];

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--border-light)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                  border: '1px solid var(--border-light)', transition: 'all 0.3s ease', color: 'var(--text-secondary)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 5px 15px ${social.color}40`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Crafted with <FiHeart style={{ color: 'var(--accent-tertiary)', display: 'inline' }} /> by{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Shubham Modi</span>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
              — Evolving Developer, Lifelong Learner —
            </p>
          </div>

          <div style={{ width: '100%', borderTop: '1px solid var(--border-light)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Shubham Modi. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
