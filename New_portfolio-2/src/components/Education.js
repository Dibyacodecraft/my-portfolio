import React from 'react';
import { SpotlightCard } from 'react-bits';

export default function Education() {
  const education = [
    {
      degree: 'B-Tech (2022-2026)',
      institution: 'Ajay Binay Institute Of Technology (BPUT)',
      description: 'Currently pursuing Bachelor of Technology in Computer Science.'
    },
    {
      degree: 'Intermediate (2020-2022)',
      institution: 'Ganesh Institute Of Engineering & Technology (CHSE)',
      description: 'Completed higher secondary education with focus on Science.'
    },
    {
      degree: 'Matriculation (2019-2020)',
      institution: 'Madhukeswar Nodal Bidyapitha (BSE)',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <SpotlightCard key={index} className="education-card" spotlightColor="#00c6ff">
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-description">{edu.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}