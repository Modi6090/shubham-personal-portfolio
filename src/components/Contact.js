"use client";

import React, { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const contactInfo = [
    { icon: FiMail, title: "Email", value: "shubhammodi2003@gmail.com", link: "mailto:shubhammodi2003@gmail.com" },
    { icon: FiMapPin, title: "Location", value: "India", link: "#" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: FiGithub, url: "https://github.com/Modi6090", color: "#333" },
    { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/shubham-modi-203141253", color: "#0077b5" },
    { name: "Instagram", icon: FiInstagram, url: "https://www.instagram.com/modi_shubham2709/", color: "#e1306c" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success', message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error', message: data.error || 'Failed to send message.'
        });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color var(--transition-fast)'
  };

  return (
    <section id="contact" className="section relative" style={{ backgroundImage: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div className="text-center mb-4">
            <h2 className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle">
              Have a question or want to work together? Drop an email or submit the form below.
            </p>
          </div>

          <div className="grid-2">
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Contact Details</h3>

                {contactInfo.map((info) => (
                  <div key={info.title} className="flex-start">
                    <div className="icon-box">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{info.title}</div>
                      <a href={info.link} style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Follow Me</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '45px', height: '45px', borderRadius: '50%', background: 'var(--bg-tertiary)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
                          border: '1px solid var(--border-light)', transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = social.color;
                          e.currentTarget.style.color = social.color;
                          e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border-light)';
                          e.currentTarget.style.color = 'inherit';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required style={inputStyle} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" style={{ ...inputStyle, resize: 'vertical' }} />
                </div>

                {status && (
                  <div style={{
                    padding: '1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: status.type === 'success' ? '#4ade80' : '#f87171'
                  }}>
                    {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />} {status.message}
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '0.5rem', width: '100%' }}>
                  {loading ? 'Sending...' : <><FiSend /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
