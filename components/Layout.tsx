
import React from 'react';
import { Music, Book, MessageSquare, Heart, Sparkles } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="text-red-400 w-5 h-5 fill-red-400" />
          <span className="font-serif-vintage text-xl font-bold tracking-tight">Zara's World</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#profile" className="hover:text-black transition-colors">Profile</a>
          <a href="#music" className="hover:text-black transition-colors">Music Room</a>
          <a href="#hall" className="hover:text-black transition-colors">Great Hall</a>
          <a href="#debate" className="hover:text-black transition-colors">The Forum</a>
          <a href="#sparks" className="hover:text-black transition-colors">Sparks</a>
        </div>
      </nav>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-center">
        <p className="font-serif-vintage italic text-lg text-stone-200 mb-2">"You fill up my senses, like a night in a forest..."</p>
        <p className="text-sm">Inspired by Zara. Created for a friend.</p>
      </footer>
    </div>
  );
};

export default Layout;
