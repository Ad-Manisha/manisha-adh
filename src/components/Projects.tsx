import { ExternalLink, Github, Sparkles, Refrigerator, Brain } from "lucide-react";

const projects = [
  {
    title: "FinLens",
    description: "An AI-powered expense tracker that helps users manage their finances intelligently with smart categorization and insights.",
    tech: ["React", "FastAPI", "MySQL", "AI"],
    github: "https://github.com/Ad-Manisha/finlens.git",
    icon: Sparkles,
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "FridgePal",
    description: "A smart fridge management app to track items and expiry dates, reducing food waste with timely notifications.",
    tech: ["React", "FastAPI", "Python"],
    github: "https://github.com/Ad-Manisha/fridgepal.git",
    icon: Refrigerator,
    gradient: "from-accent/20 to-primary/10",
  },
  {
    title: "MindMaze",
    description: "An interactive brain-training web app featuring puzzles, user progression tracking, and real-time XP system.",
    tech: ["React", "JavaScript", "Gamification"],
    github: "https://github.com/Ad-Manisha/mindmaze.git",
    icon: Brain,
    gradient: "from-primary/15 to-accent/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-1/2 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of projects I've built with passion and purpose
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="group relative card-gradient rounded-2xl border border-border card-shadow overflow-hidden hover:border-primary/40 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4 p-3 w-fit rounded-xl bg-secondary/50 border border-border group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-secondary/70 text-secondary-foreground rounded-md border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
