
import React from 'react';
import { Disc, PlayCircle, Music } from 'lucide-react';
import { ZARA_DATA } from '../constants';

const MusicRoom: React.FC = () => {
  return (
    <section id="music" className="py-24 px-6 bg-[#fcfaf7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-serif-vintage mb-8">The Music Room</h2>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>
                Zara has a soul that resonates with the greats. Whether it's the harmonies of 
                <strong> The Beatles</strong> or the gentle folk of <strong>John Denver</strong>, 
                her playlist is a journey through the 20th century.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Music size={100} />
                </div>
                <h3 className="text-stone-400 text-sm uppercase tracking-widest mb-2 font-semibold">Current Favorite</h3>
                <p className="text-2xl font-serif-vintage text-stone-900">"{ZARA_DATA.favoriteSong}"</p>
                <div className="mt-4 flex items-center text-stone-500 text-sm">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  <span>"You fill up my senses..."</span>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {['Rubber Soul', 'Abbey Road', 'Rocky Mountain High', 'Oldies but Goldies'].map((album) => (
                  <li key={album} className="flex items-center space-x-2 text-stone-500 text-sm italic">
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full" />
                    <span>{album}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Vinyl Record Visualization */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-stone-900 rounded-full flex items-center justify-center shadow-2xl relative record-spin">
                <div className="absolute inset-2 border-[10px] border-stone-800 rounded-full" />
                <div className="absolute inset-8 border border-stone-700/50 rounded-full" />
                <div className="absolute inset-16 border border-stone-700/50 rounded-full" />
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white z-10">
                  <Disc className="text-blue-900 h-12 w-12" />
                </div>
              </div>
              {/* Stylus arm placeholder */}
              <div className="absolute -top-4 -right-12 w-32 h-4 bg-stone-300 rounded-full rotate-45 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicRoom;
