import React from 'react';
import { FiBriefcase, FiBook, FiCalendar, FiArrowRight } from 'react-icons/fi';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            role: "Full Stack Developer (Freelance)",
            company: "Self-Employed",
            duration: "2022 - Present",
            description: "Developing full-stack web applications using React.js, Node.js, and MongoDB. Built 10+ web and mobile applications from concept through deployment."
        },
        {
            type: "work",
            role: "Web Development Intern",
            company: "Tata Steel",
            duration: "July 2024 - Aug 2024",
            description: "Worked on frontend development tasks, responsive web components, and significantly improved enterprise website performance."
        }
    ];

    const education = [
        {
            type: "edu",
            role: "B.Tech in CS & IT",
            company: "ITER SOA University",
            duration: "2021 - 2025",
            description: "Core coursework focused on software development, algorithms, data structures, and modern web technologies."
        }
    ];

    const renderTimelineItem = (item, index) => (
        <div key={index} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Timeline accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'var(--gradient-main)' }} />

            <div className="flex-between mb-3" style={{ alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.role}</h3>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1rem' }}>{item.company}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                    <FiCalendar /> {item.duration}
                </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.description}
            </p>
        </div>
    );

    return (
        <section id="experience" className="section relative bg-tertiary-tint" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">
                        Experience & <span className="gradient-text">Education</span>
                    </h2>
                    <p className="section-subtitle">
                        My professional timeline and academic foundation.
                    </p>
                </div>

                <div className="grid-2">
                    {/* Work Experience */}
                    <div>
                        <div className="flex-start mb-4">
                            <div className="icon-box" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
                                <FiBriefcase />
                            </div>
                            <h3 style={{ fontSize: '1.5rem' }}>Work History</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {experiences.map((item, i) => renderTimelineItem(item, i))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex-start mb-4">
                            <div className="icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#c084fc' }}>
                                <FiBook />
                            </div>
                            <h3 style={{ fontSize: '1.5rem' }}>Education</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {education.map((item, i) => renderTimelineItem(item, i))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
