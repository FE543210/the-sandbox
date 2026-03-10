import React, { useState } from 'react';
import { Github, ExternalLink, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const projects = [
  {
    title: 'Gravity Protocol',
    description: 'Reinforcement learning agent for logistics. Optimizes supply chain networks via advanced simulation.',
    tech: ['Python', 'PyTorch'],
    link: '#',
    github: '#',
    type: 'white'
  },
  {
    title: 'Sentient UI',
    description: 'Generative interfaces reacting to user frustration. Dynamic React components modified by LLM feedback.',
    tech: ['Next.js', 'LLM'],
    link: '#',
    github: '#',
    type: 'black'
  },
  {
    title: 'Neural DB',
    description: 'Database using embeddings for indexless queries. Because who needs traditional indexing anyway?',
    tech: ['Rust', 'Vector DB'],
    link: '#',
    github: '#',
    type: 'white'
  },
  {
    title: 'Project Omega.',
    description: 'It knows what you did last summer.',
    tech: ['TensorFlow', 'Secret API'],
    link: '#',
    github: '#',
    type: 'black'
  }
];

export default function App() {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  const handleCardClick = (id) => {
    if (cardOrder[2] === id) return;
    setCardOrder(prev => {
      const remaining = prev.filter(x => x !== id);
      return [...remaining, id];
    });
  };

  const heroCards = [
    {
      id: 0,
      className: "card card-black card-shadow-white",
      origin: "bottom left",
      content: (
        <p className="text-body" style={{ fontSize: '1.3rem' }}>Some piece-of-shit portfolio website my AI made.</p>
      )
    },
    {
      id: 1,
      className: "card card-white card-shadow",
      origin: "bottom right",
      content: (
        <p className="text-body" style={{ fontSize: '1.3rem', fontWeight: 800 }}>A reinforcement learning agent that optimizes logistics.</p>
      )
    },
    {
      id: 2,
      className: "card card-black card-shadow-white",
      origin: "bottom center",
      content: (
        <>
          <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 900 }}>The Sandbox.</h3>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', fontWeight: 900, borderTop: '2px solid #fff', paddingTop: '1rem' }}>
            <span>Version 1.0</span>
          </div>
        </>
      )
    }
  ];

  const positions = [
    { rotate: -15, x: -100, y: 50, zIndex: 1 },
    { rotate: 10, x: 50, y: -20, zIndex: 2 },
    { rotate: -4, x: 0, y: 0, zIndex: 3 }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', width: '100vw', overflowX: 'hidden' }}>
      
      {/* Header - Now Solid Black to prevent white text on white bg issues */}
      <header style={{ 
        position: 'fixed', 
        top: 0, left: 0, right: 0, 
        zIndex: 100, 
        padding: '1.5rem 4vw', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottom: '2px solid #222'
      }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 style={{ fontSize: '1.5rem', cursor: 'pointer' }}>The Sandbox.</h1>
        </a>
        <nav style={{ display: 'flex', gap: '2vw', fontWeight: 900, fontSize: '1.1rem' }}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        padding: '80px 4vw 0', // Offset header
        overflow: 'hidden'
      }}>
        {/* Massive Background Text */}
        <div style={{ zIndex: 1, position: 'relative', marginTop: '-10vh' }}>
          <h2 className="text-massive" style={{ color: '#fff', fontSize: 'clamp(2rem, 5.5vw, 5.5rem)' }}>Where AI ideas</h2>
          <h2 className="text-massive" style={{ color: '#fff', fontSize: 'clamp(2rem, 5.5vw, 5.5rem)' }}>come to mind.</h2>
        </div>

        {/* Fanned Cards positioned absolute within Hero visually imitating CAH */}
        <div className="card-stack-hero" style={{
          position: 'absolute',
          right: '5vw',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(260px, 25vw, 380px)',
          height: 'clamp(364px, 35vw, 532px)',
          zIndex: 0,
        }}>
          {heroCards.map((card) => {
            const posIndex = cardOrder.indexOf(card.id);
            const pos = positions[posIndex];
            const isFront = posIndex === 2;
            return (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 300, rotate: 0 }}
                animate={{ 
                  opacity: 1,
                  rotate: pos.rotate, 
                  x: pos.x, 
                  y: pos.y, 
                  zIndex: pos.zIndex,
                  scale: isFront ? 1 : 0.95 
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                onClick={() => handleCardClick(card.id)}
                className={card.className}
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  transformOrigin: card.origin,
                  cursor: isFront ? 'default' : 'pointer'
                }}
              >
                {card.content}
              </motion.div>
            );
          })}
        </div>

        <div style={{ position: 'absolute', bottom: '4vw', left: '4vw', zIndex: 10 }}>
           <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 900 }}>
             Scroll to see projects <ArrowDown size={28} strokeWidth={4} />
           </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundColor: '#fff', color: '#000', padding: '10vw 4vw', position: 'relative' }}>
         <h2 className="text-massive" style={{ marginBottom: '8vw', color: '#000' }}>The Damage.</h2>

         <div style={{ 
           display: 'grid', 
           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
           gap: '4vw' 
         }}>
           {projects.map((proj, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 100, filter: 'blur(10px)', scale: 0.95 }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
               whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.8, delay: (idx % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
               className={`card ${proj.type === 'black' ? 'card-black' : 'card-white'}`}
               style={{
                 margin: idx % 2 === 0 ? '0' : '4vw 0 -4vw 0', // Staggered layout 
                 willChange: "transform, filter"
               }}
             >
                <div>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 2vw, 2.2rem)', marginBottom: '1.2rem' }}>{proj.title}</h3>
                  <p className="text-body" style={{ fontWeight: 600 }}>{proj.description}</p>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {proj.tech.map(t => (
                      <span key={t} style={{ 
                        padding: '0.3rem 0.6rem', 
                        background: proj.type === 'black' ? '#fff' : '#000', 
                        color: proj.type === 'black' ? '#000' : '#fff', 
                        fontSize: '0.9rem',
                        fontWeight: 900,
                        borderRadius: '3px'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', borderTop: `2px solid ${proj.type ==='black' ? '#fff' : '#000'}`, paddingTop: '1.2rem' }}>
                    <a href={proj.github} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 900, fontSize: '1.1rem' }}>
                      <Github size={24} strokeWidth={3} /> Source
                    </a>
                    <a href={proj.link} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 900, fontSize: '1.1rem' }}>
                      <ExternalLink size={24} strokeWidth={3} /> Live
                    </a>
                  </div>
                </div>
             </motion.div>
           ))}
         </div>
      </section>

      {/* Footer Area - Completely Black, Right Aligned */}
      <footer id="contact" style={{ 
        padding: '12vw 4vw 6vw', 
        backgroundColor: '#000', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        minHeight: '60vh',
        textAlign: 'right'
      }}>
        <h2 className="text-massive" style={{ maxWidth: '90vw' }}>
          Hire me before<br/>the machines take over.
        </h2>
        
        <div style={{ marginTop: '5vw' }}>
          <a href="mailto:hello@filip.ai" className="btn">
            Contact Filip
          </a>
        </div>
        
        <p style={{ marginTop: '10vw', fontWeight: 900, color: '#555', fontSize: '1.1rem' }}>
          © {new Date().getFullYear()} Filip. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
