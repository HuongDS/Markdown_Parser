import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-gutter py-4">
      <div className="flex items-center gap-8">
        <span className="font-headline-md text-headline-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          ProjectMap
        </span>
        <nav className="hidden md:flex gap-6 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps" href="#">Dashboard</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-caps text-label-caps" href="#">Documentation</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 rounded-full border border-slate-200">
          <span className="material-symbols-outlined text-primary text-[18px]">badge</span>
          <span className="text-body-md font-medium text-slate-700">Nguyễn Văn A - Demo</span>
        </div>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all duration-300">search</button>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all duration-300">settings</button>
      </div>
    </header>
  );
};
