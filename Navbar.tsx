
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Účetnictví & CFO', path: '/finance' },
    { label: 'Vzdělávání & AI', path: '/vzdelavani' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-dark/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-medium tracking-tighter text-white">
          Miroslav <span className="font-serif-italic opacity-70">Ulrych</span>
        </Link>
        
        <ul className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <li key={item.path}>
              {item.path.startsWith('/#') ? (
                <a 
                  href={item.path}
                  className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === '/' && location.hash === item.path.substring(1) 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  to={item.path} 
                  className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link 
          to="/#kontakt" 
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[2px] px-8 py-3 rounded-full transition-all hidden sm:block"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
