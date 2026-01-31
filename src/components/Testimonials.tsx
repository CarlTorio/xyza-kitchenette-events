import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Sobrang sarap ng pagkain at napakaganda ng setup! Lahat ng bisita namin humanga sa catering. Salamat XYZA IEL!',
    author: 'Karen Villanueva',
    event: 'Wedding Reception 2024',
  },
  {
    quote:
      'Yung live band nila ang ganda! Lahat ng guests namin sumayaw. Complete package talaga sila, from food to entertainment.',
    author: 'Mark and Joy Santos',
    event: 'Debut 2024',
  },
  {
    quote:
      'Super worth it ng Basic Catering nila for small gatherings. Affordable pero hindi mukhang mura. Professional ang staff.',
    author: 'Tita Nene Reyes',
    event: 'Birthday Party 2024',
  },
  {
    quote:
      'Third time na namin sila kinuha. Consistent ang quality ng food at service. Highly recommended for any event!',
    author: 'Rodriguez Family',
    event: 'Family Reunion 2025',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with XYZA IEL Kitchenette.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
