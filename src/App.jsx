import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
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
  },
  {
    title: 'Quantum Learn',
    description: 'A study on accelerating neural networks using quantum annealing.',
    tech: ['Qiskit', 'Python'],
    link: '#',
    github: '#',
    type: 'white'
  },
  {
    title: 'Autonomous Swarm',
    description: 'A reinforcement learning environment for multi-agent drone coordination.',
    tech: ['C++', 'ROS2'],
    link: '#',
    github: '#',
    type: 'black'
  },
  {
    title: 'Cybernetic Core',
    description: 'Memory management framework for long-running LLM instances.',
    tech: ['Rust', 'WASM'],
    link: '#',
    github: '#',
    type: 'white'
  }
];

export default function App() {
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);
  const projectsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (projectsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Extra pixel buffer due to subpixel rendering rounding issues or fractional scroll widths
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const { scrollLeft, clientWidth } = projectsRef.current;
      const scrollAmount = clientWidth * 0.8;
      projectsRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
      content: (
        <p className="text-body" style={{ fontSize: '1.3rem' }}>Some piece-of-shit portfolio website my AI made.</p>
      )
    },
    {
      id: 1,
      className: "card card-white card-shadow",
      content: (
        <p className="text-body" style={{ fontSize: '1.3rem', fontWeight: 800 }}>A reinforcement learning agent that optimizes logistics.</p>
      )
    },
    {
      id: 2,
      className: "card card-black card-shadow-white",
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
    { rotate: -10, x: -140, y: 20, zIndex: 10 },
    { rotate: 10, x: 140, y: -10, zIndex: 20 },
    { rotate: 0, x: 0, y: 0, zIndex: 30 }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Global CSS hard-override for iOS/Mac rubberband scrolling showing white */}
      <style>{`
        html, body, #root {
          background-color: #000 !important;
          margin: 0;
        }
      `}</style>
      
      {/* Header - Now Solid Black to prevent white text on white bg issues */}
      <header style={{ 
        position: 'fixed', 
        top: 0, left: 0, right: 0, 
        zIndex: 100, 
        padding: '1.5rem 2vw', // Reduced padding so it's closer to the corners
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottom: '2px solid #222',
        pointerEvents: 'none'
      }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit', pointerEvents: 'auto' }}>
          <h1 style={{ fontSize: '1.5rem', cursor: 'pointer' }}>The Sandbox.</h1>
        </a>
        <nav style={{ display: 'flex', gap: '2vw', fontWeight: 900, fontSize: '1.1rem', pointerEvents: 'auto' }}>
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
        <div style={{ zIndex: 1, position: 'relative', marginTop: '-10vh', pointerEvents: 'none' }}>
          <h2 className="text-massive" style={{ color: '#fff', fontSize: 'clamp(2rem, 5.5vw, 5.5rem)' }}>Where AI ideas</h2>
          <h2 className="text-massive" style={{ color: '#fff', fontSize: 'clamp(2rem, 5.5vw, 5.5rem)' }}>come to mind.</h2>
        </div>

        {/* Fanned Cards positioned absolute within Hero visually imitating CAH */}
        <div className="card-stack-hero" style={{
          position: 'absolute',
          right: 'max(15vw, 220px)', // Move cards further in from the right edge
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(240px, 22vw, 320px)', // Slightly shrunk to prevent clipping on smaller screens
          height: 'clamp(336px, 30.8vw, 448px)',
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
                transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
                onClick={() => handleCardClick(card.id)}
                className={card.className}
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  transformOrigin: 'bottom center', // Uniform origin prevents weird looping arcs
                  cursor: isFront ? 'default' : 'pointer',
                  pointerEvents: 'auto'
                }}
              >
                {card.content}
              </motion.div>
            );
          })}
          
          {/* Navigation Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '-2rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.4rem',
              zIndex: 0
            }}
          >
            {[0, 1, 2].map(dot => (
              <div 
                key={dot}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: cardOrder[2] === dot ? '#fff' : 'rgba(255,255,255,0.3)',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </motion.div>
        </div>

        <div style={{ position: 'absolute', bottom: '4vw', right: '4vw', zIndex: 10 }}>
           <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', fontWeight: 900 }}>
             Scroll to see projects <ArrowDown size={28} strokeWidth={4} />
           </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundColor: '#fff', color: '#000', padding: '6vw 0', position: 'relative' }}>
         <h2 className="text-massive" style={{ marginBottom: '4vw', color: '#000', paddingLeft: '4vw' }}>The Damage.</h2>

         {/* Left Arrow (Absolute positioning to container, not flex wrapper) */}
         {canScrollLeft && (
           <button 
             onClick={() => scrollProjects('left')}
             className="carousel-btn left"
             style={{
                position: 'absolute',
                left: '4vw',
                top: '55%',
                transform: 'translateY(-50%)',
                zIndex: 30,
                background: '#fff',
                border: '2px solid #000',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '-4px 4px 0px rgba(0,0,0,1)'
             }}
           >
             <ChevronLeft size={36} strokeWidth={3} />
           </button>
         )}

         {/* Right Arrow */}
         {canScrollRight && (
           <button 
             onClick={() => scrollProjects('right')}
             className="carousel-btn right"
             style={{
                position: 'absolute',
                right: '4vw',
                top: '55%',
                transform: 'translateY(-50%)',
                zIndex: 30,
                background: '#fff',
                border: '2px solid #000',
                borderRadius: '50%',
                width: '4rem',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '-4px 4px 0px rgba(0,0,0,1)'
             }}
           >
             <ChevronRight size={36} strokeWidth={3} />
           </button>
         )}

         {/* Carousel Window */}
         <div 
           ref={projectsRef}
           onScroll={checkScrollPosition}
           className="hide-scrollbar"
           style={{ 
             display: 'flex', 
             gap: '3rem', 
             overflowX: 'auto',
             scrollSnapType: 'x mandatory',
             padding: '2vw 10vw 4vw 8vw', // Provide padding so cards don't stick to the buttons
             scrollPaddingLeft: '8vw',
             width: '100%',
             position: 'relative',
             zIndex: 10,
             alignItems: 'center' // Prevents flex children from vertically stretching to match tallest
           }}
         >
           {projects.map((proj, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 100, filter: 'blur(10px)', scale: 0.95 }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
               whileHover={{ 
                 y: -20, 
                 scale: 1.05, 
                 boxShadow: "-15px 15px 0px rgba(0,0,0,0.9)", // Ensures both black and white cards have a dark shadow against the white background
                 transition: { duration: 0.3, type: "spring", bounce: 0.4 } 
               }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.8, delay: (idx % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
               className={`card ${proj.type === 'black' ? 'card-black' : 'card-white'}`}
               style={{
                 width: 'clamp(280px, 30vw, 360px)', // Fixed sizing width, height driven by aspect-ratio in CSS
                 flexShrink: 0,
                 scrollSnapAlign: 'center',
                 margin: '0', 
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
        padding: '8vw 4vw 4vw', 
        backgroundColor: '#000', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        minHeight: '100vh', // Fully covers screen to avoid white banner from previous section
        textAlign: 'right'
      }}>
        <h2 className="text-massive" style={{ maxWidth: '90vw' }}>
          Hire me before<br/>the machines take over.
        </h2>
        
        <div style={{ marginTop: '5vw' }}>
          <a href="mailto:hello@filip.ai" className="btn">
            Get In Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
