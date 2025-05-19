import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { topNav } from '../../data/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-[#F9F6F2] py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            className="text-[#C28F79] text-2xl font-serif hover:opacity-90 transition-opacity"
            aria-label="Lumina Home"
          >
            Lumina
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {topNav.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-[#7C4D39] hover:text-[#C28F79] transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C28F79] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#7C4D39] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-[#F9F6F2] z-[999] transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`} style={{ top: scrolled ? '48px' : '80px' }}>
          <ul className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
            {topNav.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-2xl text-[#7C4D39] hover:text-[#C28F79] transition-colors font-serif"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;