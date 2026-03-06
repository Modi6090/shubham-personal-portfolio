import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiGlobe, FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Trading Platform",
      description: "A comprehensive stock trading platform with real-time market data, portfolio management, and trading functionalities. Features live price updates, technical analysis tools, and a user-friendly interface.",
      image: "/media/stock-trading.png",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      github: "https://github.com/Modi6090/Stck-trading-Platform",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Image Recognition (OCR)",
      description: "An intelligent image recognition website that uses OCR technology to extract and process text from images. Features include text extraction, document scanning, and multi-format support.",
      image: "/media/image-recon-app.png",
      techStack: ["React.js", "Python", "Flask", "OpenCV", "Tesseract"],
      github: "https://github.com/Modi6090/image-recon-app",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Resume Feedback using AI",
      description: "An AI-powered resume analysis tool providing intelligent feedback and suggestions. Assesses skills, aids ATS optimization, and offers personalized recommendations for job applications.",
      image: "/media/resume-feedback.png",
      techStack: ["React.js", "Python", "FastAPI", "OpenAI", "NLP"],
      github: "https://github.com/Modi6090/resumeFeedback",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Jarvis - Personal Assistant",
      description: "An intelligent virtual assistant designed to automate daily tasks, answer queries, and manage schedules using natural language processing over various API integrations.",
      image: "/media/Jarvis.png",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
      github: "https://github.com/Modi6090/Jarvis",
      category: "Backend"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack': return FiGlobe;
      case 'Frontend': return FiCode;
      case 'Backend': return FiDatabase;
      case 'AI/ML': return FiTrendingUp;
      default: return FiCode;
    }
  };

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work bridging complex backend functionality with beautiful user interfaces.
          </p>
        </div>

        <div className="grid-2">
          {projects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div key={project.id} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-light)' }}>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', opacity: '0.8' }}
                  />

                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(10, 10, 11, 0.8)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--border-light)', fontSize: '0.85rem', zIndex: 1 }}>
                    <Icon style={{ color: 'var(--accent-primary)' }} />
                    {project.category}
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', flexGrow: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.techStack.map(tech => (
                      <span key={tech} style={{ padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: '500' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
