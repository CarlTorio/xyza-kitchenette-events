import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  badge: string;
  badgeClass: string;
  pricing: { pax: string; price: string }[];
  inclusions: string[];
  validity?: string;
}

const packages: Package[] = [
  {
    id: 'wedding',
    name: 'Intimate / Civil Wed',
    badge: 'Wedding Special',
    badgeClass: 'badge-wedding',
    pricing: [
      { pax: '50 Pax', price: '₱60,000' },
      { pax: '70 Pax', price: '₱70,000' },
      { pax: '100 Pax', price: '₱100,000 (w/ Free Grazing Table)' },
    ],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Theme Backdrop',
      'Light and Sound System',
      'Host/Emcee',
      'Photo and Video Coverage',
      'Food and Drinks',
    ],
    validity: 'Till May 31, 2026',
  },
  {
    id: 'debut',
    name: 'Debut Celebration',
    badge: '18th Birthday',
    badgeClass: 'badge-debut',
    pricing: [
      { pax: '50 Pax', price: '₱50,000' },
      { pax: '70 Pax', price: '₱60,000' },
      { pax: '100 Pax', price: '₱75,000' },
    ],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Theme Backdrop',
      'Light and Sound System',
      'Host/Emcee',
      'Photo Coverage',
      'Food and Drinks',
    ],
    validity: 'Till May 31, 2026',
  },
  {
    id: 'kids',
    name: 'Kids Birthday',
    badge: 'For Kids',
    badgeClass: 'badge-kids',
    pricing: [
      { pax: '50 Pax', price: '₱43,000' },
      { pax: '70 Pax', price: '₱53,000' },
      { pax: '100 Pax', price: '₱68,000' },
    ],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Theme Backdrop',
      'Light and Sound System',
      'Clown with Magic',
      'Food and Drinks',
    ],
    validity: 'Till May 31, 2026',
  },
  {
    id: 'adult',
    name: 'Adult Celebration',
    badge: 'Adult Party',
    badgeClass: 'badge-adult',
    pricing: [
      { pax: '50 Pax', price: '₱38,000' },
      { pax: '70 Pax', price: '₱48,000' },
      { pax: '100 Pax', price: '₱63,000' },
    ],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Theme Backdrop',
      'Light and Sound System',
      'Food and Drinks',
    ],
    validity: 'Till May 31, 2026',
  },
  {
    id: 'baptism',
    name: 'Baptism / 1st Birthday',
    badge: 'Baby Celebration',
    badgeClass: 'badge-baby',
    pricing: [
      { pax: '50 Pax', price: '₱33,000' },
      { pax: '70 Pax', price: '₱43,000' },
      { pax: '100 Pax', price: '₱58,000' },
    ],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Theme Backdrop',
      'Food and Drinks',
    ],
    validity: 'Till May 31, 2026',
  },
  {
    id: 'basic',
    name: 'Basic Catering',
    badge: 'Starter',
    badgeClass: 'badge-basic',
    pricing: [{ pax: '20 Pax', price: '₱11,000' }],
    inclusions: [
      'Complete Buffet Set-up',
      'Tables and Chairs with Cover',
      'Plates, Utensils and Glasswares',
      'Uniformed Staff',
      'Food and Drinks',
    ],
  },
];

const PackageCard = ({ pkg }: { pkg: Package }) => {
  const [expanded, setExpanded] = useState(false);
  const displayedInclusions = expanded ? pkg.inclusions : pkg.inclusions.slice(0, 5);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden card-hover">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <span className={`badge ${pkg.badgeClass} mb-3`}>{pkg.badge}</span>
        <h3 className="text-xl font-serif font-bold text-foreground">{pkg.name}</h3>
      </div>

      {/* Pricing */}
      <div className="p-5 bg-muted/30">
        {pkg.pricing.map((price, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
          >
            <span className="text-sm text-muted-foreground">{price.pax}</span>
            <span className="font-semibold text-foreground">{price.price}</span>
          </div>
        ))}
      </div>

      {/* Inclusions */}
      <div className="p-5">
        <h4 className="text-sm font-semibold text-foreground mb-3">Inclusions:</h4>
        <ul className="space-y-2">
          {displayedInclusions.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>

        {pkg.inclusions.length > 5 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-primary mt-3 hover:underline"
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={16} />
              </>
            ) : (
              <>
                See all inclusions <ChevronDown size={16} />
              </>
            )}
          </button>
        )}

        {pkg.validity && (
          <p className="text-xs text-muted-foreground mt-4 italic">
            Valid: {pkg.validity}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="p-5 pt-0">
        <button onClick={scrollToBooking} className="btn-primary w-full text-sm py-2.5">
          Inquire Now
        </button>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete event packages tailored for every celebration. All packages include professional setup and service.
          </p>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 mb-12 text-center">
          <h3 className="text-xl font-semibold mb-3">Special Promos</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm">
            <span>Starts at ₱33K — Free Arch Entrance for 50 Pax and above</span>
            <span className="hidden md:inline">|</span>
            <span>Starts at ₱58K — Free Photobooth Standee for 100 Pax</span>
          </div>
          <p className="mt-3 text-sm opacity-90">
            No Transportation Fee around Bay, Los Banos and Pansol
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
