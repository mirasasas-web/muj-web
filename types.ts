
// Fix: Added React import to provide React namespace for ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Reference {
  quote: string;
  author: string;
  role: string;
}
