
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  const accentColor = 'group-hover:text-primary';
  const borderColor = 'hover:border-primary/20';
  const iconBg = 'bg-primary/5';
  const iconColor = 'text-primary';

  return (
    <div 
      className={`group p-10 glass-card rounded-[2.5rem] transition-all duration-500 ${borderColor} hover:-translate-y-2`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon && (
        <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
          <div className={`${iconColor}`}>
            {icon}
          </div>
        </div>
      )}
      <h3 className={`text-2xl font-semibold mb-4 text-white tracking-tight transition-colors ${accentColor}`}>
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed font-light text-lg">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;