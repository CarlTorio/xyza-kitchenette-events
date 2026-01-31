import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const eventTypes = [
  'Wedding',
  'Debut',
  'Kids Birthday',
  'Adult Celebration',
  'Baptism/1st Birthday',
  'Corporate',
  'Other',
];

const guestOptions = ['20', '50', '70', '100', '100+'];

const packageOptions = [
  'Intimate / Civil Wed',
  'Debut Celebration',
  'Kids Birthday',
  'Adult Celebration',
  'Baptism / 1st Birthday',
  'Basic Catering',
  'Custom/Not Sure',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    packageInterested: '',
    venueLocation: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Salamat! We will contact you within 24 hours.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      packageInterested: '',
      venueLocation: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to discuss your event needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              XYZA IEL Kitchenette
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Telephone</p>
                  <p className="text-muted-foreground">(049) 540-5482</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Cellphone</p>
                  <p className="text-muted-foreground">0999-304-6662</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Contact Person</p>
                  <p className="text-muted-foreground">Ms. Carol</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-muted-foreground">Bay, Los Banos, Pansol, Laguna</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Free Transportation</p>
                  <p className="text-muted-foreground">
                    No Transportation Fee around Bay, Los Banos and Pansol
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://facebook.com/xyzaielkitchenette"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>
              <a
                href="https://web.facebook.com/messages/t/113189223747703/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={20} />
                Messenger
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61815.74366946025!2d121.21!3d14.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5f0f4f0c8001%3A0x1d96a8c2e2f0e18!2sBay%2C%20Laguna!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XYZA IEL Kitchenette Location"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div id="booking" className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="input-pill"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-pill"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-pill"
                    placeholder="09XX-XXX-XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="input-pill"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-1">
                    Estimated Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="input-pill"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="input-pill"
                  >
                    <option value="">Select guest count</option>
                    {guestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option} Pax
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="packageInterested" className="block text-sm font-medium text-foreground mb-1">
                    Package Interested In
                  </label>
                  <select
                    id="packageInterested"
                    name="packageInterested"
                    value={formData.packageInterested}
                    onChange={handleChange}
                    className="input-pill"
                  >
                    <option value="">Select a package</option>
                    {packageOptions.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="venueLocation" className="block text-sm font-medium text-foreground mb-1">
                  Venue Location
                </label>
                <input
                  type="text"
                  id="venueLocation"
                  name="venueLocation"
                  value={formData.venueLocation}
                  onChange={handleChange}
                  className="input-pill"
                  placeholder="Complete address of event venue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="textarea-rounded"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
