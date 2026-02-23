
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { SITE_CONFIG } from '../config';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero / About Me */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >

          <h1 className="font-serif text-6xl md:text-8xl mb-8 text-white">
            {SITE_CONFIG.hero.heading} <span className="italic opacity-80 text-primary">{SITE_CONFIG.hero.headingItalic}</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
            {SITE_CONFIG.about.text}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {SITE_CONFIG.about.tags.map(tag => (
              <span key={tag} className="border border-white/5 bg-white/[0.03] px-6 py-2 text-[10px] uppercase tracking-widest text-gray-400 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Navigation Branches */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Finance Branch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <Link to="/finance" className="block p-12 glass-card rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h2 className="font-serif text-4xl mb-6 text-white">Účetnictví & CFO</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Kompletní finanční servis pro firmy a OSVČ. Od daní až po strategické CFO poradenství.
              </p>
              <div className="inline-flex items-center space-x-4 text-primary font-bold uppercase tracking-widest text-xs">
                <span>Vstoupit do sekce</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          </motion.div>

          {/* Education Branch */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <Link to="/vzdelavani" className="block p-12 glass-card rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h2 className="font-serif text-4xl mb-6 text-white">Vzdělávání & AI</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Implementace AI do školství a doučování účetnictví pro studenty. Budoucnost oboru začíná zde.
              </p>
              <div className="inline-flex items-center space-x-4 text-primary font-bold uppercase tracking-widest text-xs">
                <span>Vstoupit do sekce</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
