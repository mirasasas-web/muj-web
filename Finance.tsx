
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import { SITE_CONFIG } from '../config';

const Finance: React.FC = () => {
  const financeServices = [
    {
      title: "Účetnictví & Daně",
      description: "Kompletní vedení účetní agendy, zpracování daňových přiznání (DPH, DPPO, DPFO) a zastupování před úřady.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    },
    {
      title: "Komunikace s FÚ",
      description: "Odborné zastupování při kontrolách, řešení výzev a zajištění bezproblémového vztahu s finanční správou.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    },
    {
      title: "Externí CFO",
      description: "Strategické finanční řízení pro malé a začínající firmy. Pomoc s cashflow, reportingem a plánováním růstu.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
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
            title="Účetnictví & CFO Poradenství" 
            subtitle="Finance pod kontrolou" 
          />
          <p className="text-gray-400 text-xl max-w-3xl font-light leading-relaxed">
            Poskytuji komplexní finanční zázemí, které vám uvolní ruce pro rozvoj vašeho podnikání. 
            Mým cílem je, aby vaše finance nebyly jen nutnou administrativou, ale strategickým nástrojem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {financeServices.map((service, idx) => (
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
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-white">Potřebujete stabilní finanční zázemí?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Domluvme si nezávaznou konzultaci, kde probereme potřeby vaší firmy a najdeme nejlepší cestu k efektivitě.
          </p>
          <a href="/#kontakt" className="inline-block bg-primary hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30">
            Napište mi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Finance;
