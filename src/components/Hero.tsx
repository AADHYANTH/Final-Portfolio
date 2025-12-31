import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.svg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const fullText = 'Aadhyanth Rao';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 blur-[80px] rounded-full" />
      </div>

      {/* Vertical social icons - left edge */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent mx-auto" />
        <a
          href="https://github.com/aadhyanth"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass-card-hover rounded-full group"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/aadhyanth205"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 glass-card-hover rounded-full group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <a
          href="mailto:aadhyanthrao205@gmail.com"
          className="p-3 glass-card-hover rounded-full group"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent mx-auto" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="hero-content-enter" style={{ animationDelay: '0.1s' }}>
              <p className="text-primary font-mono text-sm md:text-base mb-6 tracking-wider inline-flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Welcome to my portfolio
              </p>
            </div>

            <div className="hero-content-enter" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-[0.9]">
                <span className="text-foreground block mb-2">Hi, I'm</span>
                <span className="gradient-text glow-text block">
                  {displayText}
                  <span
                    className={`inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary ml-2 ${
                      isTypingComplete ? 'animate-pulse' : ''
                    }`}
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
                "Building Innovative Software Solutions"
              </p>
            </div>

            {/* Glassmorphism role badges */}
            <div className="hero-content-enter flex flex-wrap justify-center lg:justify-start gap-3 mb-8" style={{ animationDelay: '0.3s' }}>
              {['Full Stack Developer', 'AI Enthusiast', 'Java Developer'].map((role, index) => (
                <span
                  key={role}
                  className="role-badge-glow px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-xl border transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${0.4 + index * 0.1}s`,
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.1))',
                    borderColor: 'hsl(var(--primary) / 0.3)',
                    color: 'hsl(var(--primary))',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.2), inset 0 1px 0 hsl(var(--foreground) / 0.05)',
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="hero-content-enter" style={{ animationDelay: '0.5s' }}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Full-stack developer specializing in scalable applications and AI integration, 
                turning complex problems into elegant solutions.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="hero-content-enter flex flex-wrap justify-center lg:justify-start gap-4" style={{ animationDelay: '0.7s' }}>
              <Button 
                onClick={handleScrollToProjects}
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-500"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-6 text-lg rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-500"
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile social links */}
            <div className="hero-content-enter flex justify-center lg:hidden gap-6 mt-10" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com/aadhyanth" target="_blank" rel="noopener noreferrer" className="p-3 glass-card-hover rounded-full group">
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com/in/aadhyanth205" target="_blank" rel="noopener noreferrer" className="p-3 glass-card-hover rounded-full group">
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:aadhyanthrao205@gmail.com" className="p-3 glass-card-hover rounded-full group">
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Profile image with glow effect */}
            <div className="relative">
              {/* Glow ring */}
              <div 
                className="absolute -inset-4 rounded-full opacity-60 blur-xl animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                }}
              />
              
              {/* Profile image */}
              <div 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-float"
                style={{
                  boxShadow: '0 0 60px hsl(var(--primary) / 0.3)',
                }}
              >
                <img 
                  src={profilePhoto} 
                  alt="Aadhyanth Rao" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative floating elements */}
              <div 
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-float"
                style={{
                  background: 'hsl(var(--primary))',
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                  animationDelay: '0.5s',
                }}
              />
              <div 
                className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full animate-float"
                style={{
                  background: 'hsl(var(--accent))',
                  boxShadow: '0 0 15px hsl(var(--accent) / 0.5)',
                  animationDelay: '1s',
                }}
              />
              <div 
                className="absolute top-1/4 -left-8 w-4 h-4 rounded-full animate-float"
                style={{
                  background: 'hsl(var(--primary) / 0.7)',
                  boxShadow: '0 0 10px hsl(var(--primary) / 0.4)',
                  animationDelay: '1.5s',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-wider group-hover:text-primary transition-colors">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
