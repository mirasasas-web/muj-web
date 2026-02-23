
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';

const Education: React.FC = () => {
  const eduServices = [
    {
      title: "AI pro školy & pedagogy",
      description: "Praktické workshopy a konzultace zaměřené na implementaci AI nástrojů do výuky a administrativy škol.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg>
    },
    {
      title: "Doučování účetnictví",
      description: "Individuální i skupinová výuka pro studenty SŠ a VŠ. Srozumitelné vysvětlení látky a příprava na zkoušky.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    },
    {
      title: "Metodika & Praxe",
      description: "Propojení teoretických znalostí s reálnou praxí v účetnictví s využitím moderních technologií.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <SectionHeader 
            title="Vzdělávání & AI Transformace" 
            subtitle="Budoucnost oboru" 
          />
          <p className="text-gray-400 text-xl max-w-3xl font-light leading-relaxed">
            Věřím, že technologie by měly lidem pomáhat, ne je nahrazovat. 
            Učím pedagogy i studenty, jak využít AI k efektivnější práci a jak porozumět světu financí v 21. století.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {eduServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <FeatureCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center border-primary/20">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">Chcete posunout výuku nebo své znalosti?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Ať už jste škola hledající cestu k AI, nebo student bojující s účetnictvím, jsem tu pro vás.
          </p>
          <a href="/#kontakt" className="inline-block bg-primary hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30">
            Domluvit lekci / workshop
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
