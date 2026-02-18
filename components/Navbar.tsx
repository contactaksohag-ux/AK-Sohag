
import React from 'react';

interface NavbarProps {
  activeSection?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'hero' }) => {
  const getLinkClass = (section: string) => {
    return `transition-all duration-300 relative py-1 ${
      activeSection === section 
        ? 'text-white font-bold' 
        : 'text-gray-400 hover:text-white'
    }`;
  };

  const getIndicatorClass = (section: string) => {
    return `absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full transition-all duration-300 transform origin-left ${
      activeSection === section ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
    }`;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl glass-card rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl">
      <div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-primary-500 flex items-center justify-center font-bold text-white shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">S</div>
        <span className="font-display font-bold text-lg hidden sm:block tracking-tight">Sohag.</span>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium">
        <a href="#about" className={getLinkClass('about')}>
          About
          <span className={getIndicatorClass('about')}></span>
        </a>
        <a href="#projects" className={getLinkClass('projects')}>
          Projects
          <span className={getIndicatorClass('projects')}></span>
        </a>
        <a href="#contact" className={getLinkClass('contact')}>
          Contact
          <span className={getIndicatorClass('contact')}></span>
        </a>
      </div>
      
      <a 
        href="#contact"
        className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all shadow-md active:scale-95 hidden sm:block"
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
