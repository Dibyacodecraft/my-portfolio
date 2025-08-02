import React from 'react';
import { SpotlightCard } from 'react-bits';

export default function Projects() {
  const projects = [
    {
      title: 'Disaster Management App',
      description: 'A comprehensive application for disaster management using HTML, CSS, TypeScript, and Kotlin.',
      technologies: ['HTML', 'CSS', 'TS', 'KOTLIN']
    },
    {
      title: 'Emotion Detection',
      description: 'Real-time emotion detection system using OpenCV and machine learning algorithms.',
      technologies: ['OpenCV', 'Python', 'Machine Learning']
    },
    {
      title: 'Chat Bot',
      description: 'Intelligent chatbot built using Hugging Face transformers for natural language processing.',
      technologies: ['Hugging Face', 'NLP', 'Python']
    },
    {
      title: 'Scientific Calculator',
      description: 'A feature-rich scientific calculator built with Python and Tkinter library.',
      technologies: ['Python', 'Tkinter']
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <SpotlightCard key={index} className="project-card" spotlightColor="#0072ff">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}