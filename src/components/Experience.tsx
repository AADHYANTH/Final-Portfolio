import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Sentinent Dynamics',
    role: 'Full Stack Developer',
    period: 'Dec 2024 – Present',
    location: 'Remote',
    highlights: [
      'Working on fintech projects with 40% improved efficiency through optimized solutions',
      'Building responsive and dynamic frontend interfaces using Angular framework',
      'Developing robust backend APIs and integrating with multiple financial services',
      'Collaborating with cross-functional teams to deliver scalable financial applications',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    company: 'ATMECS Technologies',
    role: 'Java Developer Intern',
    period: 'Sep 2023 – Dec 2023',
    location: 'Hyderabad, India',
    highlights: [
      'Enhanced module performance by 20% through efficient database queries',
      'Developed solutions with RESTful APIs using Java 8 and Spring Boot framework',
      'Partnered with designers and product managers to align technical solutions with business requirements',
      'Contributed to the full software development lifecycle (SDLC) by writing unit-tested, production-ready Java code',
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    company: 'InternPe',
    role: 'Web Development Intern',
    period: 'Sep 2023 – Oct 2023',
    location: 'Hyderabad, India',
    highlights: [
      'Built and deployed full-stack web applications, improving response times by 15%',
      'Designed and implemented an e-commerce website using HTML, CSS, and JavaScript',
      'Applied modern UI/UX principles to create an adaptive user interface',
      'Increased usability and engagement across devices',
    ],
    gradient: 'from-green-500 to-teal-600',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Experience</h2>
          <p className="section-subtitle mx-auto">
            Professional journey and impactful contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary animate-pulse-glow z-10" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="glass-card-hover p-6">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.gradient}`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
