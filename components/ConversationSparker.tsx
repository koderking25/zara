
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, RefreshCcw } from 'lucide-react';
import { generateConversationSpark } from '../services/geminiService';
import { ConversationStarter } from '../types';

const ConversationSparker: React.FC = () => {
  const [sparks, setSparks] = useState<ConversationStarter[]>([]);
  const [loading, setLoading] = useState(false);

  const getSparks = async () => {
    setLoading(true);
    const result = await generateConversationSpark();
    setSparks(result);
    setLoading(false);
  };

  return (
    <section id="sparks" className="py-24 px-6 bg-stone-50 border-y border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 text-blue-600 mb-4 bg-blue-50 px-4 py-1 rounded-full text-sm font-semibold">
          <Sparkles size={16} />
          <span>Gemini AI powered Magic</span>
        </div>
        <h2 className="text-4xl font-serif-vintage mb-6">Need a Conversation Spark?</h2>
        <p className="text-stone-600 mb-12 text-lg">
          Zara is easy to talk to, but if you want to really impress her with a topic she loves, 
          let's brainstorm some ideas together.
        </p>

        <button 
          onClick={getSparks}
          disabled={loading}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-all shadow-xl flex items-center space-x-2 mx-auto disabled:bg-stone-400"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              <span>Thinking of Zara...</span>
            </>
          ) : (
            <>
              <RefreshCcw size={20} />
              <span>Generate Sparks</span>
            </>
          )}
        </button>

        <div className="mt-16 grid gap-6">
          {sparks.map((spark, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl text-left border border-stone-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-md">
                  {spark.topic}
                </span>
                <button 
                   onClick={() => navigator.clipboard.writeText(spark.message)}
                   className="text-stone-400 hover:text-stone-900 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xl font-serif-vintage text-stone-900 mb-3 italic">
                "{spark.message}"
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                <strong>Why:</strong> {spark.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversationSparker;
