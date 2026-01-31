import { ChefHat, Music } from 'lucide-react';

const services = [
  {
    icon: ChefHat,
    title: 'Catering Services',
    description:
      'Professional food service for all occasions. Complete buffet setup with uniformed staff, quality tableware, and delicious food that will delight your guests.',
    events: ['Weddings', 'Debuts', 'Birthdays', 'Baptism', 'Corporate Events'],
  },
  {
    icon: Music,
    title: 'Live Music Entertainment',
    description:
      'Live bands and DJ services to make your event memorable. Complete with professional light and sound system to set the perfect atmosphere.',
    events: ['Parties', 'Receptions', 'Corporate Events', 'Special Occasions'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two exceptional services that combine to create the perfect celebration experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <div className="border-t border-border pt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Perfect for:
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.events.map((event, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
