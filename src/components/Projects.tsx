import { ExternalLink, Github, Brain, Leaf, Mic, Bot } from 'lucide-react';

const projects = [
  {
    title: 'AI Agent Chatbot',
    description: 'Built an intelligent AI-powered chatbot agent capable of understanding context, handling complex queries, and providing accurate responses using modern NLP techniques and conversational AI frameworks.',
    icon: Bot,
    accuracy: 'AI-Powered',
    category: 'Conversational AI',
    gradient: 'from-orange-500 to-red-600',
    tags: ['AI', 'NLP', 'Python', 'Chatbot', 'Machine Learning'],
    github: 'https://github.com/AADHYANTH/Ai-Agent_chatbot',
    demo: '#',
  },
  {
    title: 'COVID-19 Detection using Chest X-Ray',
    description: 'Developed an AI-based diagnostic tool using Convolutional Neural Networks to detect COVID-19 from X-ray images. Achieved 94% accuracy, demonstrating the potential of AI for fast and non-invasive screening in healthcare.',
    icon: Brain,
    accuracy: '94%',
    category: 'AI Diagnostic',
    gradient: 'from-cyan-500 to-blue-600',
    tags: ['CNN', 'Flask', 'Deep Learning', 'Python', 'TensorFlow'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: "AgriVision: The Ultimate Farmer's Helper",
    description: 'Built a full-stack ML application to predict crop yield, recommend suitable crops, forecast prices, and detect plant diseases using transfer learning (DenseNet121).',
    icon: Leaf,
    accuracy: '90%+',
    category: 'Agricultural AI',
    gradient: 'from-green-500 to-emerald-600',
    tags: ['DenseNet121', 'Flask', 'Transfer Learning', 'Python', 'ML'],
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Emotion Detection Through Human Voice',
    description: 'Developed a Streamlit-based emotion detection system enabling audio file upload, signal processing (MFCC, Mel spectrograms), and real-time emotion prediction with interactive visualizations.',
    icon: Mic,
    accuracy: 'Real-time',
    category: 'Audio Analysis',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Streamlit', 'MFCC', 'Mel Spectrograms', 'Python', 'Signal Processing'],
    github: 'https://github.com',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Innovative AI-powered solutions that demonstrate real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient header */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {project.accuracy}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/80" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/50 text-primary text-xs font-medium rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.demo}
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
