"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <div className="nav-logo gradient-text">SM</div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-item"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="nav-controls">
          <a href="https://github.com/Modi6090" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            GitHub
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="icon-btn"
            style={{ display: 'none' }} /* Would need media query to show on mobile, omitted for simplicity to stick to CSS classes, let's add one inline style override for now or use CSS */
            id="mobile-menu-btn"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
