import { GraduationCap, MapPin, Calendar, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about building innovative solutions and learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">AR</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">Aadhyanth Rao</h3>
                <p className="text-primary text-center font-mono mb-4">Full Stack Developer & AI Enthusiast</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Hyderabad, India
                  </span>
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    VIT Chennai
                  </span>
                </div>

                {/* Resume Download Button */}
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-6 py-5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <a href="/Aadhyanth_Resume.pdf" download="Aadhyanth_Rao_Resume.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Full Stack Developer and AI Enthusiast focused on building scalable web applications 
              and intelligent systems. I specialize in end-to-end development-from clean, responsive UIs 
              to robust backend APIs and real-world machine learning integration.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              With experience in Java, Spring Boot, Python, Flask, AWS, and ML frameworks, I enjoy solving 
              complex problems through clean code, optimized systems, and data-driven solutions. I'm 
              passionate about continuous learning and building products that create real impact.
            </p>

            {/* Education Cards */}
            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h4>

              <div className="glass-card-hover p-5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-semibold text-foreground">Vellore Institute of Technology</h5>
                    <p className="text-primary text-sm">B.Tech in Computer Science and Engineering</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2021 - 2025
                    </span>
                    <span className="text-primary font-mono text-sm flex items-center gap-1 mt-1">
                      <Award className="w-4 h-4" />
                      CGPA: 8.24/10
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card-hover p-5">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h5 className="font-semibold text-foreground">Narayana Junior College</h5>
                    <p className="text-primary text-sm">Intermediate Education</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2019 - 2021
                    </span>
                    <span className="text-primary font-mono text-sm flex items-center gap-1 mt-1">
                      <Award className="w-4 h-4" />
                      Marks: 896/1000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
