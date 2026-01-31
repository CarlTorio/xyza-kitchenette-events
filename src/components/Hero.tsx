import { useNavigate } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const navigate = useNavigate();
  let clickCount = 0;
  let clickTimer: NodeJS.Timeout | null = null;

  const handleLogoClick = () => {
    clickCount++;
    
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 400);
    }
    
    if (clickCount === 2) {
      if (clickTimer) clearTimeout(clickTimer);
      clickCount = 0;
      navigate('/admin/login');
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo - Double tap for admin */}
        <button
          onClick={handleLogoClick}
          className="inline-block mb-6 animate-fade-in"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg">
            XYZA IEL Kitchenette
          </h1>
        </button>

        {/* Tagline */}
        <p
          className="text-sm md:text-base uppercase tracking-[0.3em] text-white/90 mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Catering and Live Music Entertainment
        </p>

        {/* Headline */}
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-10 leading-tight animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Every Bite and Every Beat Creates Lasting Memories
        </h2>

        {/* CTA Button */}
        <button
          onClick={scrollToBooking}
          className="btn-primary text-lg animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Book Now
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
