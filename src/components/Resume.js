"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiCalendar, FiMapPin, FiAward, FiBook, FiCode } from 'react-icons/fi';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Information Technology",
      institution: "ITER SOA University",
      duration: "2021 - 2025",
      location: "Bhubaneswar",
      description: "Currently pursuing Computer Science Engineering with focus on software development, algorithms, and web technologies."
    }
  ];

  const experience = [
    {
      position: "Full Stack Developer (Freelance)",
      company: "Self-Employed",
      duration: "2022 - Present",
      location: "Remote",
      description: "Developing full-stack web applications using React.js, Node.js, and MongoDB. Working on various client projects and personal applications.",
      achievements: [
        "Built 10+ web applications using modern technologies",
        "Implemented responsive designs and user-friendly interfaces",
        "Collaborated with clients to deliver high-quality solutions"
      ]
    },
    {
      position: "Web Development Intern",
      company: "Tata Steel",
      duration: "1 july - 1 august",
      location: "Remote",
      description: "Worked on frontend development tasks and learned industry best practices.",
      achievements: [
        "Developed responsive web components using react.js, node.js, express.js",
        "Improved website performance and user experience",
        "Collaborated with senior developers on various projects"
      ]
    }
  ];

  const selfLearning = [
    {
      skill: "React.js & Frontend Development",
      duration: "2024 - Present",
      description: "Self-taught React.js, JavaScript, HTML, CSS, and modern frontend frameworks. Built multiple projects to master component-based architecture and state management.",
      projects: ["E-Commerce Platform", "Task Management App", "Weather Dashboard"]
    },
    {
      skill: "Node.js & Backend Development",
      duration: "2024 - Present", 
      description: "Learned Node.js, Express.js, and MongoDB through hands-on projects. Developed RESTful APIs and full-stack applications.",
      projects: ["Blog API", "E-Commerce Backend", "Authentication System"]
    },
    {
      skill: "DevOps & Tools",
      duration: "2025 - Present",
      description: "Self-taught Git, Docker, and various development tools. Learned deployment strategies and best practices.",
      projects: ["CI/CD Pipeline", "Docker Containerization", "Git Workflow"]
    }
  ];

  const handleDownload = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a');
    link.href = '/shubham-resume.pdf'; // Placeholder base64
    link.download = 'Shubham_Modi_Resume.pdf';
    link.click();
  };

  return (
  <section id="resume" className="section-padding bg-gray-50 dark:bg-dark-800 px-2 sm:px-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Download my resume or explore my experience and education below.
          </p>
          
          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiDownload size={20} />
            <span>Download Resume (PDF)</span>
          </motion.button>
        </motion.div>

  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <FiBook className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1 sm:mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h4>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1 sm:mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiMapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base mb-2 sm:mb-3">
                    {exp.description}
                  </p>
                  {exp.achievements && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Self Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16"
        >
          <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <FiCode className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Self Learning Journey
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {selfLearning.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {learning.skill}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1 sm:mb-2">
                  {learning.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                  {learning.description}
                </p>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Key Projects:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    {learning.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
