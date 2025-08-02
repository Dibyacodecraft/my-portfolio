import React from 'react';
import { SpotlightCard } from 'react-bits';

export default function Achievements() {
  const achievements = [
    {
      title: 'Microsoft Azure Cloud Certificate',
      description: 'Certificate for fundamental cloud computing'
    },
    {
      title: 'National Hackathon Event-2025',
      description: 'Certified 2nd position'
    },
    {
      title: 'Trident Hackathon',
      description: 'Placed 4th'
    },
    {
      title: 'Summer Training',
      description: 'Completed training on Python, AI/ML'
    },
    {
      title: 'Poster Presentation',
      description: 'Presented at ABIT'
    },
    {
      title: 'Hackathon Participation',
      description: 'ASBM National Hackathon (APP STACK)'
    },
    {
      title: 'Trident Environmental Solution',
      description: 'Participated in environmental solution hackathon'
    },
    {
      title: 'IIT Bhubaneswar',
      description: 'Attended workshops on Data Science and Ethical Hacking'
    }
  ];

  return (
    <div className="achievements-container">
      <h2 className="section-title">Achievements & Training</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <SpotlightCard key={index} className="achievement-card" spotlightColor="#00c6ff">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}