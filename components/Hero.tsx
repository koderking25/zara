
import React from 'react';
import { ZARA_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-800 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/20">
          The Girl with the Vintage Soul
        </span>
        <h1 className="text-7xl md:text-9xl font-serif-vintage text-white mb-6 tracking-tighter">
          {ZARA_DATA.name}
        </h1>
        <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
          From texting in group chats to sharing a world of <span className="text-blue-300">Beatles</span> records, 
          <span className="text-yellow-200 italic"> Harry Potter</span> magic, and 
          <span className="text-red-300"> formal debates</span>.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
        <div className="w-px h-12 bg-white mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;
