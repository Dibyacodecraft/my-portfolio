import React from 'react';
import { SpotlightCard } from 'react-bits';

export default function Skills() {
  const skills = [
    { name: 'Core Python', level: 90 },
    { name: 'C', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Microsoft Word, Excel', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'Spyder', level: 85 },
    { name: 'Pycharm', level: 85 },
    { name: 'Jupyter Notebook', level: 90 },
    { name: 'Artificial Intelligence', level: 80 },
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SpotlightCard key={index} className="skill-card" spotlightColor="#00c6ff">
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}