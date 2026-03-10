import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const projects = [
  {
    title: 'Gravity Protocol: A reinforcement learning agent for logistics.',
    description: 'Optimizes supply chain networks via advanced simulation.',
    tech: ['Python', 'PyTorch'],
    link: '#',
    github: '#'
  },
  {
    title: 'Sentient UI: Generative interfaces reacting to user frustration.',
    description: 'Dynamic React components modified by LLM feedback.',
    tech: ['Next.js', 'LLM'],
    link: '#',
    github: '#'
  },
  {
    title: 'Neural DB: Database using embeddings for indexless queries.',
    description: 'Because who needs traditional indexing anyway?',
    tech: ['Rust', 'Vector DB'],
    link: '#',
    github: '#'
  },
  {
    title: 'Project Omega.',
    description: 'It knows what you did last summer.',
    tech: ['TensorFlow'],
    link: '#',
    github: '#'
  }
];

export default function App() {
  return (
    <div className="theme--night" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <header style={{ padding: '2rem 0', borderBottom: '2px solid #333' }}>
        <div className="cah-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
            Filip. AI.
          </h2>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }}>
            <a href="#projects" className="hover-underline">Projects</a>
            <a href="#contact" className="hover-underline">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="cah-container" style={{ padding: '6rem 2rem 4rem', boxSizing: 'border-box' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: '900px', marginBottom: '2rem' }}
          >
            I build AI agents that actually work.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ maxWidth: '700px', color: '#b0b0b0', marginBottom: '4rem', fontWeight: 400 }}
          >
            A collection of miserable failures and stunning successes in machine learning, generative UI, and reinforcement learning.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cah-button"
            style={{
              padding: '1rem 2rem',
              background: '#fff',
              color: '#000',
              border: 'none',
              fontWeight: 900,
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '2px', // Very slight radius
              fontFamily: 'inherit'
            }}
          >
            See the damage <ArrowRight size={24} strokeWidth={3} />
          </motion.button>
        </section>

        <section id="projects" className="cah-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
            padding: '2rem 0'
          }}>
            {projects.map((proj, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="cah-card"
              >
                <div>
                  <h3 style={{ fontSize: '21px', lineHeight: '29px', color: '#000', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#444', fontWeight: 500 }}>
                    {proj.description}
                  </p>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {proj.tech.map(t => (
                      <span key={t} style={{ 
                        padding: '0.2rem 0.6rem', 
                        background: '#000', 
                        color: '#fff', 
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        borderRadius: '2px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="cah-logo-container">
                    <a href={proj.github} style={{ color: '#000', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 800 }}>
                      <Github size={20} strokeWidth={2.5} /> Source
                    </a>
                    <a href={proj.link} style={{ color: '#000', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 800 }}>
                      <ExternalLink size={20} strokeWidth={2.5} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '2px solid #333', padding: '4rem 2rem 2rem', marginTop: '6rem' }}>
        <div className="cah-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>Hire me before<br/>the machines take over.</h2>
          <p style={{ color: '#666', fontSize: '1rem', fontWeight: 'bold' }}>© {new Date().getFullYear()} Filip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
