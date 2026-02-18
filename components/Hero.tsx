
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("AK Sohag's Resume is ready! (Mock download triggered)");
    }, 1500);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 px-4 flex flex-col items-center text-center">
      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        Crafting Shared Codebases
      </div>
      
      <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 max-w-4xl leading-[1.1]">
        The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-500">Multiplatform</span> is here.
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        I am AK Sohag, a specialized Mobile Developer from Sylhet, Bangladesh. I build high-end cross-platform apps using Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP).
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={scrollToProjects}
          className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-2 group min-w-[200px] justify-center"
        >
          View Projects
          <i className="fa-solid fa-arrow-down transition-transform group-hover:translate-y-1"></i>
        </button>
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="px-8 py-4 glass-card border border-white/10 font-bold rounded-2xl hover:border-white/20 transition-all min-w-[200px] justify-center flex items-center gap-2"
        >
          {isDownloading ? (
            <>
              <i className="fa-solid fa-circle-notch animate-spin"></i>
              Preparing...
            </>
          ) : (
            <>
              <i className="fa-solid fa-download"></i>
              Download CV
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
