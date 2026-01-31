import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Packages from '@/components/Packages';
import Services from '@/components/Services';
import Credentials from '@/components/Credentials';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Packages />
      <Services />
      <Credentials />
      <Gallery />
      <Testimonials />
      
      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Create Lasting Memories?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us make your next event unforgettable with our professional catering and live music entertainment.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Book Your Event Now
          </button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
