
import React from 'react';
import { MapPin, User, Ruler, Dog, Clock, Calendar } from 'lucide-react';
import { ZARA_DATA } from '../constants';

const DetailsGrid: React.FC = () => {
  const details = [
    { icon: User, label: "Age", value: `${ZARA_DATA.age} Years Old` },
    { icon: MapPin, label: "Location", value: ZARA_DATA.location },
    { icon: Ruler, label: "Height", value: ZARA_DATA.height },
    { icon: Calendar, label: "Program", value: "Short-term Programs" },
    { icon: Dog, label: "Her Pet", value: ZARA_DATA.pet.description },
    { icon: Clock, label: "Pet Age", value: ZARA_DATA.pet.age },
  ];

  return (
    <section id="profile" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif-vintage mb-4">Key Intel</h2>
          <p className="text-stone-500">The little things that make Zara who she is.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {details.map((detail, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 flex flex-col items-center text-center group hover:bg-stone-100 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <detail.icon className="text-stone-600 h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{detail.label}</span>
              <span className="text-xl font-serif-vintage text-stone-900">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsGrid;
