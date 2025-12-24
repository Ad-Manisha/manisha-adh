import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always excited to meet new people, discuss opportunities, 
              or collaborate on interesting projects
            </p>
          </div>

          {/* Contact card */}
          <div className="card-gradient rounded-3xl border border-border card-shadow p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Message */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Open to Opportunities
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you have a project in mind, want to discuss tech, 
                  or just want to say hi — I'd love to hear from you! 
                  Let's build something amazing together.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Nepal</span>
                </div>
              </div>

              {/* Right: Contact links */}
              <div className="space-y-4">
                <a
                  href="mailto:manisha.adhikari1818@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">manisha.adhikari1818@gmail.com</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://github.com/Ad-Manisha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-foreground">@Ad-Manisha</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">Manisha Adhikari</p>
                  </div>
                  <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
