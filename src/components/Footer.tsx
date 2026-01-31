import { Facebook, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <h2 className="text-2xl font-serif font-bold mb-6">XYZA IEL Kitchenette</h2>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm">
            {['Home', 'Packages', 'Services', 'Gallery', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase())}
                className="hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://facebook.com/xyzaielkitchenette"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://web.facebook.com/messages/t/113189223747703/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              (049) 540-5482
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <Phone size={16} />
              0999-304-6662
            </span>
          </div>

          {/* Credentials */}
          <p className="text-sm text-white/60 mb-8">
            Business Permits | BIR Registered | PHILGEPS Registered
          </p>

          {/* Powered By */}
          <p className="text-xs text-white/40 mb-2">Powered by LogiCode.PH</p>

          {/* Copyright */}
          <p className="text-xs text-white/40">
            © 2026 XYZA IEL Kitchenette. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
