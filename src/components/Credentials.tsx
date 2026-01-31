import { CheckCircle, FileText, Building } from 'lucide-react';

const credentials = [
  {
    icon: FileText,
    title: 'Business Permits',
    description: 'Fully licensed and compliant',
  },
  {
    icon: Building,
    title: 'BIR Registered',
    description: 'Tax compliant business',
  },
  {
    icon: CheckCircle,
    title: 'PHILGEPS Registered',
    description: 'Government accredited',
  },
];

const Credentials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Trusted and Registered
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <credential.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{credential.title}</h3>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
