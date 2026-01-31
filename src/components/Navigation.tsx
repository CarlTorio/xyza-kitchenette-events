import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const leftLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Packages', id: 'packages' },
    { label: 'Services', id: 'services' },
  ];

  const rightLinks = [
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {leftLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  } hover:text-primary`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Logo - Center */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-xl md:text-2xl font-serif font-bold transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                XYZA IEL Kitchenette
              </button>
            </div>

            {/* Right Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {rightLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  } hover:text-primary`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary text-sm"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-foreground' : 'text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-foreground' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-card/98 backdrop-blur-lg transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif font-bold text-primary mb-8"
          >
            XYZA IEL Kitchenette
          </button>
          
          {[...leftLinks, ...rightLinks].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection('booking')}
            className="btn-primary mt-4"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
