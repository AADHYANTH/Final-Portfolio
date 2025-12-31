import { Code, Layers, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Methodologies',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: ['Spring Boot', 'RESTful APIs', 'React', 'Angular', 'Docker', 'Agile', 'Flask', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    color: 'from-teal-500 to-cyan-500',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Redis', 'CI/CD', 'MongoDB', 'Oracle 11g', 'MySQL'],
  },
  {
    title: 'ML & Data Tools',
    icon: Brain,
    color: 'from-orange-500 to-yellow-500',
    skills: ['Deep Learning', 'NumPy', 'Pandas', 'Scikit-Learn', 'LangChain', 'GenAI', 'ML', 'Transfer Learning'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-5`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
