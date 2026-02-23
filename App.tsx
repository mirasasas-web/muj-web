
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Finance from './pages/Finance';
import Education from './pages/Education';
import AIAssistant from './components/AIAssistant';
import SectionHeader from './components/SectionHeader';
import { SITE_CONFIG } from './config';
import { useState } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  
  return null;
};

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    if (SITE_CONFIG.emailServiceId === "YOUR_FORMSPREE_ID") {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${SITE_CONFIG.emailServiceId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setTimeout(() => {
        setFormStatus('idle');
    }, 5000);
  };

  return (
    <section id="kontakt" className="py-40 bg-accent px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="max-w-3xl mx-auto relative">
        <SectionHeader title={SITE_CONFIG.contact.formHeading} subtitle={SITE_CONFIG.contact.formSubtitle} />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href={SITE_CONFIG.contact.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] px-6 py-3 rounded-2xl transition-all hover:-translate-y-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
          </a>
          <a href={SITE_CONFIG.contact.socials.teams} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-[#464EB8]/10 hover:bg-[#464EB8]/20 border border-[#464EB8]/20 text-[#464EB8] px-6 py-3 rounded-2xl transition-all hover:-translate-y-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.5 13.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zm7 0c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zM12.5 14.5c-2.33 0-7 1.17-7 3.5V20h14v-2c0-2.33-4.67-3.5-7-3.5zm7 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.02 1.97 3.45v2h4v-2c0-2.33-4.67-3.5-5-3.5zM7.5 10.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zM5 14.5c-.33 0-5 1.17-5 3.5V20h4v-2c0-1.43.81-2.61 1.97-3.45-.35-.03-.68-.05-.97-.05z"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider">MS Teams</span>
          </a>
          <a href={SITE_CONFIG.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/20 text-[#0077B5] px-6 py-3 rounded-2xl transition-all hover:-translate-y-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
          </a>
        </div>

        {formStatus === 'success' ? (
          <div className="text-center p-12 glass-card rounded-[2.5rem] border-primary/30">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Zpráva odeslána</h3>
            <p className="text-gray-400">Ozvu se vám co nejdříve zpět na váš e-mail.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Vaše jméno" className="w-full bg-white/[0.04] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all font-light" />
              <input required type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="E-mail" className="w-full bg-white/[0.04] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all font-light" />
            </div>
            <textarea required name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} placeholder="O čem budeme mluvit?" className="w-full bg-white/[0.04] border border-white/10 p-5 rounded-2xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all resize-none font-light" />
            <button disabled={formStatus === 'sending'} className="w-full bg-primary hover:bg-blue-600 disabled:bg-gray-700 text-white p-6 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all shadow-2xl shadow-primary/20 hover:-translate-y-1 flex items-center justify-center space-x-3">
              {formStatus === 'sending' ? <span>Odesílám...</span> : <span>Odeslat poptávku</span>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-20 border-t border-white/5 text-center">
    <div className="flex justify-center space-x-8 mb-8">
        <a href={SITE_CONFIG.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href={SITE_CONFIG.contact.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <a href={SITE_CONFIG.contact.socials.teams} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.5 13.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5zm7 0c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zM12.5 14.5c-2.33 0-7 1.17-7 3.5V20h14v-2c0-2.33-4.67-3.5-7-3.5zm7 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.02 1.97 3.45v2h4v-2c0-2.33-4.67-3.5-5-3.5zM7.5 10.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zM5 14.5c-.33 0-5 1.17-5 3.5V20h4v-2c0-1.43.81-2.61 1.97-3.45-.35-.03-.68-.05-.97-.05z"/></svg>
        </a>
    </div>
    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
      &copy; {new Date().getFullYear()} Miroslav Ulrych &bull; Profesionální účetnictví &bull; AI Transformace
    </p>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans bg-dark text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/vzdelavani" element={<Education />} />
          </Routes>
        </main>
        <ContactSection />
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
