
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a 
      href={tool.link} 
      className="relative block p-6 bg-slate-800/50 rounded-xl border border-slate-700/80 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 group text-center"
    >
      {tool.badge && (
        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-indigo-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {tool.badge}
        </span>
      )}
      <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
        <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-lg">
          {tool.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-100">{tool.title}</h3>
      </div>
      <p className="text-slate-400 leading-relaxed">{tool.description}</p>
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 transition-all duration-300 pointer-events-none"></div>
    </a>
  );
};

export default ToolCard;