import { Cloud, Code, Shield, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    description: 'Foundational understanding of AWS Cloud services, security, architecture, and billing.',
    icon: Cloud,
    gradient: 'from-orange-400 to-yellow-500',
  },
  {
    title: 'Java Development',
    issuer: 'Oracle Student Learning',
    date: 'Dec 2023',
    description: 'Comprehensive Java programming certification covering core concepts and advanced features.',
    icon: Code,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Information Security',
    issuer: 'CS406 Certification',
    date: 'Feb 2024',
    description: 'Security fundamentals including cryptography, network security, and best practices.',
    icon: Shield,
    gradient: 'from-green-400 to-teal-500',
  },
];

const Certifications = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Professional credentials in cloud computing, programming, and security
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card-hover p-6 text-center group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-10`} />
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cert.gradient} p-0.5 relative z-10`}>
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <cert.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
