import { useState } from 'react';
import { X } from 'lucide-react';

import event1 from '@/assets/gallery/event-1.jpg';
import event2 from '@/assets/gallery/event-2.jpg';
import event3 from '@/assets/gallery/event-3.jpg';
import event4 from '@/assets/gallery/event-4.jpg';
import event5 from '@/assets/gallery/event-5.jpg';
import event6 from '@/assets/gallery/event-6.jpg';
import event7 from '@/assets/gallery/event-7.jpg';
import event8 from '@/assets/gallery/event-8.jpg';
import event9 from '@/assets/gallery/event-9.jpg';
import event10 from '@/assets/gallery/event-10.jpg';

const images = [
  { src: event1, alt: 'Elegant gold and white event setup' },
  { src: event2, alt: '80th birthday celebration' },
  { src: event3, alt: 'Pink themed table setup' },
  { src: event4, alt: 'Blue corporate event decor' },
  { src: event5, alt: 'Graduation ceremony setup' },
  { src: event6, alt: 'Buffet station with elegant decor' },
  { src: event7, alt: 'Outdoor birthday celebration' },
  { src: event8, alt: 'Birthday party with balloon arch' },
  { src: event9, alt: 'Debut celebration at night' },
  { src: event10, alt: 'XYZA IEL Kitchenette catering display' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our beautifully crafted events and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
