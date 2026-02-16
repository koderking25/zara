
import React from 'react';
import { MessageSquare, Cpu, Scale } from 'lucide-react';

const DebateSection: React.FC = () => {
  return (
    <section id="debate" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-serif-vintage mb-8">The Forum</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Cpu className="text-blue-500" />
                  <h3 className="text-xl font-bold">AI Music Ethics</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  Zara isn't just about the past; she's thinking about the future. 
                  She enjoys diving into the complexities of how Artificial Intelligence 
                  is changing the landscape of music. Is it a tool or a threat? 
                  Ask her about it—she's got thoughts.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="text-stone-800" />
                  <h3 className="text-xl font-bold">Formal Discussions</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  She prefers depth over surface-level chatter. A "formal discussion" 
                  with Zara means exploring ideas, debating ethics, and really 
                  getting to know what makes a person tick.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-blue-50 rounded-3xl flex flex-col items-center justify-center p-6 text-center">
              <MessageSquare className="h-10 w-10 text-blue-300 mb-4" />
              <span className="text-sm font-medium">Texting Pro</span>
            </div>
            <div className="aspect-square bg-stone-900 rounded-3xl flex flex-col items-center justify-center p-6 text-center text-white">
              <span className="text-4xl font-serif-vintage mb-2">VS</span>
              <span className="text-xs uppercase tracking-tighter">Debate Mode</span>
            </div>
            <div className="col-span-2 bg-stone-100 rounded-3xl p-8 flex items-center justify-center italic text-stone-500 border border-stone-200">
              "Intellect is the new rock and roll."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebateSection;
