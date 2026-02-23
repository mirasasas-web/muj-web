
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-secondary uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-white leading-tight">
        {title}
      </h2>
      <div className={`w-24 h-1 bg-primary/30 mt-8 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionHeader;