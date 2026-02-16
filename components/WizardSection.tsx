
import React from 'react';
import { Star, Shield, Wand2 } from 'lucide-react';

const WizardSection: React.FC = () => {
  return (
    <section id="hall" className="py-24 px-6 bg-[#0c1421] text-stone-300 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star 
            key={i} 
            size={Math.random() * 10} 
            className="absolute animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }} 
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-yellow-900/30 text-yellow-500 border border-yellow-800 rounded mb-6 text-xs tracking-[0.2em] font-bold">
            THE GREAT HALL
          </div>
          <h2 className="text-5xl font-serif-vintage text-white mb-8">A Touch of Magic</h2>
          <p className="text-xl leading-relaxed mb-8 font-light italic">
            "It is our choices, Harry, that show what we truly are, far more than our abilities."
          </p>
          <div className="space-y-4">
             <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Wand2 className="text-yellow-600" />
                <span>Loves the Harry Potter universe</span>
             </div>
             <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Shield className="text-red-600" />
                <span>Gryffindor spirit: Brave & Easy to Talk To</span>
             </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
            <div className="w-64 h-80 rounded-t-full border-4 border-yellow-600/30 flex flex-col items-center justify-center bg-gradient-to-b from-stone-800 to-transparent p-8">
              <img 
                src="https://picsum.photos/seed/wizard/300/400" 
                alt="Magic Vibes"
                className="w-full h-full object-cover rounded-t-full opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WizardSection;
