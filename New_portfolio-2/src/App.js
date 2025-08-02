import React from 'react';
import { DecryptedText, SplitText } from 'react-bits';
import BackgroundEffects from './components/BackgroundEffects';
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AnimatedButton from './components/AnimatedButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      
      <header className="header">
        <div className="container">
          <DecryptedText 
            text="Dibya Ranjan Jena"
            className="name"
            speed={100}
            maxIterations={10}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
          />
          <SplitText
            text="Python Developer & AI Enthusiast"
            className="title"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
      </header>

      <main className="main-content">
        <section id="profile" className="section">
          <div className="container">
            <ProfileCard />
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <Education />
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <Achievements />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Dibya Ranjan Jena. All rights reserved.</p>
          <AnimatedButton />
        </div>
      </footer>
    </div>
  );
}

export default App;