
import React from 'react';
import { SKILLS } from '../constants';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto scroll-mt-28" id="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">About AK Sohag and Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-fr">
        {/* Main Bio Card */}
        <div className="md:col-span-2 md:row-span-2 glass-card rounded-[2.5rem] p-8 bento-hover flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">The Multiplatform Expert.</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Based in Sylhet, Bangladesh, I specialize in crafting elegant, shared-code mobile experiences using Kotlin Multiplatform (KMP). I believe that code sharing shouldn't mean compromising on user experience.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1">
              <div className="text-3xl font-bold font-display">6+</div>
              <div className="text-xs text-gray-500 uppercase font-bold mt-1">Years Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-1">
              <div className="text-3xl font-bold font-display">KMP</div>
              <div className="text-xs text-gray-500 uppercase font-bold mt-1">Primary Stack</div>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="md:col-span-2 glass-card rounded-[2.5rem] p-8 bento-hover">
          <h3 className="text-xl font-display font-bold mb-6">Stack & Tech Stack.</h3>
          <div className="grid grid-cols-3 gap-6" role="list">
            {SKILLS.map((skill, index) => (
              <div 
                key={skill.name} 
                role="listitem"
                className="flex flex-col items-center gap-2 reveal-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className={`text-3xl ${skill.color} animate-subtle-float`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  aria-hidden="true"
                >
                  <i className={skill.icon}></i>
                </div>
                <span className="text-xs text-gray-400 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Card */}
        <div className="glass-card rounded-[2.5rem] p-6 bento-hover flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-3 animate-pulse">
            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
          </div>
          <div className="text-sm text-gray-400 font-medium">Availability</div>
          <div className="text-xl font-bold text-white">Full-time Remote</div>
        </div>

        {/* Location Card */}
        <div className="glass-card rounded-[2.5rem] p-6 bento-hover flex flex-col items-center justify-center text-center overflow-hidden relative" aria-label="Location: Sylhet, Bangladesh">
           <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-[1]"></div>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=400&auto=format&fit=crop')] opacity-30 bg-cover bg-center"></div>
           <div className="relative z-10">
              <div className="text-2xl mb-1" role="img" aria-label="Flag of Bangladesh">🇧🇩</div>
              <div className="text-sm text-gray-400 font-medium">Currently in</div>
              <div className="text-xl font-bold text-white">Sylhet, BD</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
