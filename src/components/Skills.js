import React from 'react';
import {
  FiMonitor, FiServer, FiDatabase, FiSettings, FiPackage, FiCode, FiZap, FiGlobe, FiLayers, FiSmartphone
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FiMonitor,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: FiServer,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Auth (JWT)", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: FiDatabase,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 65 },
        { name: "Mongoose", level: 70 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: FiSettings,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  const futureSkills = [
    { name: "TypeScript", icon: FiCode },
    { name: "Python", icon: FiZap },
    { name: "AWS Cloud", icon: FiGlobe },
    { name: "GraphQL", icon: FiLayers }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and the tools I work with.
          </p>
        </div>

        <div className="grid-3 mb-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="flex-start mb-3">
                <div className="icon-box">
                  <category.icon />
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex-between mb-1" style={{ fontSize: '0.9rem' }}>
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', background: 'var(--bg-tertiary)', height: '6px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--gradient-main)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <h3 className="section-title mb-3" style={{ fontSize: '1.8rem' }}>Currently Exploring</h3>
          <div className="grid-4">
            {futureSkills.map((skill) => (
              <div key={skill.name} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div className="icon-box" style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)' }}>
                  <skill.icon />
                </div>
                <div style={{ fontWeight: '500' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
