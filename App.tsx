
import React, { useState, useEffect } from 'react';
import ToolCard from './components/ToolCard';
import { TOOLS } from './constants';
import { LogoIcon, UserGroupIcon } from './components/icons';

// Declare countapi on the window object for TypeScript
declare const countapi: any;

const App: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    if (typeof countapi !== 'undefined') {
      countapi.hit('thestrongmind.ai', 'visits').then((result: { value: number }) => {
        setVisitorCount(result.value);
      }).catch((error: any) => {
        console.error("Failed to fetch visitor count:", error);
      });
    }
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05] [mask-image:linear-gradient(to_bottom,transparent,white)] transform translate-z-0"></div>
      
      <div className="relative isolate min-h-screen flex flex-col">
        <header className="py-4 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold leading-[1.2]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">العقل القوي</span>
              <span className="text-slate-200"> للذكاء الاصطناعي</span>
            </h1>
            <LogoIcon className="h-10 w-10 text-cyan-400" />
          </div>
        </header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="text-center pt-20 md:pt-32 pb-10 md:pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="inline-block bg-indigo-500/10 text-indigo-300 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                مجموعة أدواتك الذكية والمتكاملة
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.18] pb-[0.4em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-12 drop-shadow-lg">
                العقل القوي للذكاء الاصطناعي
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                مجموعتك المتكاملة من أدوات الذكاء الاصطناعي لتعزيز إبداعك وإنتاجيتك. كل ما تحتاجه في مكان واحد.
              </p>
            </div>
          </section>

          {/* Tools Grid Section */}
          <section id="tools" className="pt-8 sm:pt-12 pb-16 sm:pb-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">صندوق الأدوات الذكي</h2>
                <p className="text-slate-400 mt-2">اختر الأداة المناسبة لمهمتك وانطلق نحو الإبداع.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {TOOLS.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 mt-12 border-t border-slate-800/50">
          <div className="container mx-auto text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} العقل القوي للذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
            <div className="flex items-center justify-center mt-4 space-x-2 space-x-reverse text-sm">
              <UserGroupIcon className="h-5 w-5" />
              <span>
                عدد الزوار: {visitorCount !== null ? visitorCount.toLocaleString('ar-EG') : '...'}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;