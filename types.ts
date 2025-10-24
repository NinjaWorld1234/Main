
import type React from 'react';

export interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  badge?: string;
}
