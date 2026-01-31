import { ChefHat, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Professional Catering',
      description: 'Expert food preparation with complete buffet setup and uniformed staff.',
    },
    {
      icon: Users,
      title: 'Event Specialists',
      description: 'From intimate gatherings to grand celebrations, we handle all event sizes.',
    },
    {
      icon: Award,
      title: 'Trusted & Registered',
      description: 'BIR and PHILGEPS registered with complete business permits.',
    },
    {
      icon: MapPin,
      title: 'Local Service',
      description: 'No transportation fee around Bay, Los Banos, and Pansol area.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            XYZA IEL Kitchenette brings together exceptional catering services and live music entertainment 
            to create unforgettable moments for your special occasions in Laguna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
