
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const SUGGESTIONS = [
  "Jak pomáháte firmám s AI?",
  "Nabízíte doučování účetnictví?",
  "Jaké jsou ceny za vedení agendy?",
];

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Dobrý den! Jsem digitální asistent Miroslava Ulrycha. Rád vám odpovím na dotazy ohledně účetnictví, daní nebo integrace AI do vašich procesů.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = (customMsg || input).trim();
    if (!userMsg || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[60]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] sm:w-[450px] h-[650px] max-h-[80vh] bg-accent border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-500 origin-bottom-right">
          <div className="p-8 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-serif italic font-bold text-2xl">MU</div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">AI Konzultant</h3>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Připraven pomoci</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors bg-white/5 p-3 rounded-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scroll">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[1.8rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-xl shadow-primary/10 font-medium' 
                    : 'bg-white/5 text-gray-300 border border-white/5 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-5 rounded-[1.5rem] rounded-bl-none border border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="pt-4 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(s)}
                    className="text-[11px] bg-white/5 hover:bg-white/10 border border-white/5 px-4 py-2.5 rounded-full text-gray-400 hover:text-white transition-all text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-8 bg-black/40 border-t border-white/5">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Zeptejte se na cokoliv..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed text-white w-14 h-14 flex items-center justify-center rounded-2xl transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[2.2rem] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all duration-500 hover:scale-110 active:scale-90 ${
          isOpen ? 'bg-gray-800 rotate-90 scale-90' : 'bg-primary'
        }`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-dark animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;