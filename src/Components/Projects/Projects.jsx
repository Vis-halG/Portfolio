import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';  // import external CSS

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const projects = [
     {
      title: "Spotify (Clone)",
      subtitle: "Music streaming website UI built with React & Tailwind.",
      description: "Create immersive audio experiences. Learn how to use modern web APIs to your advantage whilst building streaming platforms.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
        </svg>
      ),
      image: "./assets/Projects/Spotify.png",
      link: "https://spotify-clone-mauve-eight-16.vercel.app/",
      type: "clone"
    },
    {
      title: "E-commerce (Web Design)",
      subtitle: "Business website with animations using HTML, CSS, JS & GSAP.",
      description: "Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="m16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      image: "./assets/Projects/Enterprises.png",
      link: "https://aaradhyaenterprises.netlify.app/",
      type: "clone"
    },
    // {
    //   title: "Book My Show Clone", 
    //   subtitle: "Movie ticket booking platform built with React & Tailwind.",
    //   description: "Master React development from your very first component right through to things no one else ever teaches you.",
    //   icon: (
    //     <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //       <rect width="18" height="18" x="3" y="3" rx="2"/>
    //       <circle cx="9" cy="9" r="2"/>
    //       <path d="M21 15.5c-.7-1.3-1.4-2.5-2.1-3.9-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-.7 1.4-1.4 2.6-2.1 3.9"/>
    //     </svg>
    //   ),
    //   image: "./assets/Projects/BookMyShow.png",
    //   link: "https://bookmyshow-clone-kappa.vercel.app/",
    //   type: "clone"
    // },
   
    {
      title: "Laptop Rent (web design)",
      subtitle: "Rental service website made with HTML, CSS, JS & GSAP.",
      description: "Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      image: "./assets/Projects/LaptopRent.png",
      link: "https://laptoprent.netlify.app/",
      type: "basic"
    },
     {
      title: "Memory Card  (Mini Project)",
      subtitle: "Productivity app built with modern frameworks.",
      description: "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3l8-8"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98"/>
        </svg>
      ),
      image: "./assets/Projects/MemoryCard.png",
      link: "https://memory-game-mini.vercel.app/",
      type: "mini"
    },
    {
      title: "Number Guessing  (Mini Project)",
      subtitle: "Modern responsive portfolio with animations.",
      description: "Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      image: "./assets/Projects/NumberGuessing.png",
      link: "https://number-game-mini.vercel.app/",
      type: "mini"
    },
    
    {
      title: "Cursor Follower (Mini Project)",
      subtitle: "JS-based memory game with interactive animations.",
      description: "Grasp how to tame the pixel playground and when to do so. Whilst building with Performance Driven Development.",
      icon: (
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.4"/>
        </svg>
      ),
      image: "./assets/Projects/Cursor.png",
      link: "https://cursor-follower-mini.vercel.app/",
      type: "mini"
    },
    
   
 
  ];

  const getGridColumns = () => {
    return projects.map((_, i) => i === activeIndex ? '10fr' : '1fr').join(' ');
  };

  useEffect(() => {
    const resync = () => {
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('li');
        const maxWidth = Math.max(...Array.from(items).map(item => item.offsetWidth));
        listRef.current.style.setProperty('--article-width', maxWidth);
      }
    };

    window.addEventListener('resize', resync);
    resync();

    return () => window.removeEventListener('resize', resync);
  }, []);

  const totalProjects = projects.length;
  const webDesigns = projects.filter(p => p.type !== 'mini').length;
  const miniProjects = projects.filter(p => p.type === 'mini').length;

  return (
    <div className="animated-projects-container">
      <div className="projects_section">
        <div className='stat-container'>
        <div className='stat'>
        <div className="header">
          <h1>Project Showcase</h1>
          <p>Explore my collection of web development projects, featuring modern designs, interactive animations, and cutting-edge technologies.</p>
        </div>
        <div className="total-stats"> 
          <h2 className="stat-number">{totalProjects.toString().padStart(2, '0')}+</h2>
            <p className="stat-label">Total Projects</p>
          
        </div>
        
          </div>

        <div className="stats-grid mx-auto">
          
          <div className="stat-card">
            <h2 className="stat-number">{webDesigns.toString().padStart(2, '0')}+</h2>
            <p className="stat-label">Web Designs</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">{miniProjects.toString().padStart(2, '0')}+</h2>
            <p className="stat-label">Mini Projects</p>
          </div>
        </div>
</div>
<div className="footer-info">
          <p>Hover over cards to explore • Click to visit projects</p>
          <a href="https://github.com/Vis-halG?tab=repositories" className="footer-link" target="_blank" rel="noopener noreferrer">View All</a>
        </div>
        <div className="flex justify-center">
          <ul
            ref={listRef}
            className="project-grid"
            style={{ gridTemplateColumns: getGridColumns() }}
            onMouseMove={(e) => {
              const li = e.target.closest('li');
              if (li) {
                const index = Array.from(li.parentNode.children).indexOf(li);
                setActiveIndex(index);
              }
            }}
            onClick={(e) => {
              const li = e.target.closest('li');
              if (li && activeIndex === Array.from(li.parentNode.children).indexOf(li)) {
                const link = projects[activeIndex].link;
                if (link && link !== '#') {
                  window.open(link, '_blank');
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <li
                key={index}
                className="project-item"
                data-active={activeIndex === index}
              >
                <article className="project-article">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>View Project</span>
                  </a>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </article>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default Projects;
