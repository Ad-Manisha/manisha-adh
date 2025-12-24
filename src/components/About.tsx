import { Code2, Brain, Briefcase, MapPin } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Nest.js", "FastAPI", "Node.js", "Prisma"] },
  { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Exploring", items: ["Machine Learning", "AI", "Python"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into who I am and what drives me
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Bio */}
            <div className="space-y-6">
              <div className="card-gradient rounded-2xl p-8 border border-border card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a final year Software Engineering student with a deep passion for crafting 
                  elegant web solutions. Recently completed my internship as a{" "}
                  <span className="text-foreground font-medium">Full Stack Web Developer</span>, 
                  where I worked extensively with Nest.js, Next.js, and Prisma.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond web development, I'm actively exploring the fascinating world of 
                  AI and Machine Learning, constantly pushing myself to learn and grow.
                </p>
              </div>

              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/30 border border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Based in <span className="text-foreground">Nepal</span></span>
              </div>
            </div>

            {/* Right: Skills */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold">Tech Stack</h3>
              </div>

              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className="card-gradient rounded-xl p-5 border border-border card-shadow hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {skill.category === "Exploring" ? (
                        <Brain className="w-4 h-4 text-accent" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                      <span className="text-sm font-medium text-muted-foreground">{skill.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground rounded-md border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
