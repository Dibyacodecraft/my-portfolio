import React from 'react';
import { SpotlightCard } from 'react-bits';
import profileImage from '../assets/Dibya_single-removebg-preview.png';

export default function ProfileCard() {
  return (
    <div className="profile-container">
      <h2 className="section-title">About Me</h2>
      <div className="profile-content">
        <SpotlightCard className="profile-card" spotlightColor="#0072ff">
          <div className="profile-image-container">
            <img src={profileImage} alt="Dibya Ranjan Jena" className="profile-image" />
          </div>
          <div className="profile-info">
            <h3>Dibya Ranjan Jena</h3>
            <p className="profile-role">Python Developer</p>
            <p className="profile-description">
              Seeking a position where my knowledge can be shared and enriched, 
              an opportunity where I can work with full dedication and sincerity 
              and can use my talents in the field of Technology.
            </p>
            <div className="profile-interests">
              <h4>Interests</h4>
              <ul>
                <li>Browsing on interesting innovations</li>
                <li>Travelling</li>
                <li>Play PC games</li>
                <li>Spending quality time with friends and family</li>
              </ul>
            </div>
            <div className="profile-links">
              <a href="https://github.com/Dibyacodecraft" target="_blank" rel="noopener noreferrer" className="github-link">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/dibya-ranjan-jena-184659316/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}