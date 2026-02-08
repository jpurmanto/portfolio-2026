import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              I'm <span className="text-primary tracking-tighter">PURMANTO.</span> A developer focused on building systems that scale and matter.
            </h1>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6">
              <p>
                My journey into software engineering started with a curiosity about how things work under the hood. What began as simple experiments with HTML and CSS has evolved into a passion for architecting complex distributed systems and crafting seamless user experiences.
              </p>
              <p>
                I believe that good engineering is not just about writing code that works, but about building systems that are maintainable, testable, and provide genuine value to the user. I thrive on challenges that require deep thinking about system design and performance optimization.
              </p>
              <p>
                In my professional experience, I've had the opportunity to work on projects ranging from high-traffic e-commerce platforms to intelligent task management systems. Each project has taught me the importance of understanding constraints and making informed technical trade-offs.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="gap-2">
                Download CV <Download size={18} />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="gap-2">
                  Get in Touch <Mail size={18} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 space-y-8">
            <Card className="bg-accent/30 border-none shadow-none" hover={false}>
              <h3 className="text-xl font-bold mb-4">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Simplicity First</p>
                    <p className="text-sm text-muted-foreground">Always strive for the simplest viable solution to complex problems.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Performance Matters</p>
                    <p className="text-sm text-muted-foreground">User experience is directly tied to the speed and efficiency of the system.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Continuous Learning</p>
                    <p className="text-sm text-muted-foreground">The tech landscape is always evolving; staying curious is essential.</p>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Working With Me</h3>
              <p className="text-primary-foreground/80 mb-6">
                I'm always looking for interesting projects where I can apply my engineering skills and design thinking. If you're building something cool, let's talk.
              </p>
              <a href="mailto:hello@example.com" className="inline-flex items-center font-bold hover:underline gap-2">
                hello@example.com <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Professional Journey" />
        <div className="space-y-12">
          {[
            {
              role: "Senior Software Engineer",
              company: "Tech Solutions Inc.",
              period: "2022 - Present",
              description: "Leading the development of a microservices-based e-commerce platform. Focused on scaling the backend and improving frontend performance by 40%.",
            },
            {
              role: "Software Developer",
              company: "Creative Digital Agency",
              period: "2020 - 2022",
              description: "Developed and maintained various web applications for international clients. Implemented automated testing and CI/CD pipelines.",
            },
            {
              role: "Junior Web Developer",
              company: "Startup Hub",
              period: "2018 - 2020",
              description: "Contributed to building early-stage MVPs using React and Node.js. Focused on creating responsive and intuitive user interfaces.",
            }
          ].map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-border group">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground bg-accent px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground max-w-2xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
