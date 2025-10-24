import React from 'react';
import type { Tool } from './types';
import {
  PenToolIcon,
  MicrophoneIcon,
  ClipboardListIcon,
  SearchIcon,
} from './components/icons';

export const TOOLS: Tool[] = [
  {
    // FIX: Replaced JSX syntax with React.createElement because .ts files don't support JSX.
    icon: React.createElement(PenToolIcon, { className: "h-8 w-8 text-cyan-400" }),
    title: 'دقةّ',
    description: 'اداة استخراج النصوص من الصور أو ملفات pdf الممسوحة ضوئياً',
    link: 'https://diqqa.vercel.app/',
    badge: 'الأكثر استخداماً',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because .ts files don't support JSX.
    icon: React.createElement(MicrophoneIcon, { className: "h-8 w-8 text-rose-400" }),
    title: 'المسجّل القوي',
    description: 'سجل محاضراتك اونلاين أو حوّل الملفات الصوتية إلى نصوص مكتوبة بدقة واحترافية',
    link: 'https://v-recorder2.vercel.app/',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because .ts files don't support JSX.
    icon: React.createElement(ClipboardListIcon, { className: "h-8 w-8 text-fuchsia-400" }),
    title: 'الاستبيان القوي',
    description: 'أنشئ استبيانات واستطلاعات رأي احترافية واجمع الردود بسهولة.',
    link: 'https://maker-20-api.vercel.app/',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because .ts files don't support JSX.
    icon: React.createElement(SearchIcon, { className: "h-8 w-8 text-orange-400" }),
    title: 'الباحث القوي',
    description: 'أداة انشاء أبحاث علمية ورسائل ماجستير أو دكتوراة قوية ومدعومة بالمصادر',
    link: 'https://strong-researcher.vercel.app/',
  },
  {
    // FIX: Replaced JSX syntax with React.createElement because .ts files don't support JSX.
    icon: React.createElement(SearchIcon, { className: "h-8 w-8 text-sky-400" }),
    title: 'جالب الأبحاث',
    description: 'متخصص في البحث عن الدراسات العلمية المنتشرة على الأنترنت بطريقة احترافية',
    link: 'https://chatgpt.com/g/g-68ea086dcbc88191ae8e29674ee1b75e-jlb-lbhth-l-ql-lqwy',
    badge: 'GPT',
  },
];