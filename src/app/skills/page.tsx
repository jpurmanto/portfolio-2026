import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { Brain, Code2, Cpu, Globe, Layout, Server, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";

export default function SkillsPage() {
  const categories = [
    { name: 'Language', icon: Code2, color: 'text-blue-500' },
    { name: 'Frontend', icon: Layout, color: 'text-pink-500' },
    { name: 'Backend', icon: Server, color: 'text-green-500' },
    { name: 'Database', icon: Cpu, color: 'text-orange-500' },
    { name: 'DevOps', icon: Globe, color: 'text-purple-500' },
  ];

  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="A comprehensive overview of my technical skills, tools, and methodologies collected over years of engineering."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {categories.map((cat) => {
              const catSkills = skills.filter(s => s.category === cat.name);
              if (catSkills.length === 0) return null;

              return (
                <div key={cat.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg bg-accent ${cat.color}`}>
                      <cat.icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold">{cat.name} Expertise</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {catSkills.map((skill) => {
                      const Icon = getIcon(skill.name);
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-semibold text-foreground flex items-center gap-2">
                              {Icon && <Icon size={16} className="text-primary" />}
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-accent rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground p-8 rounded-[2rem] border-none shadow-xl shadow-primary/20 sticky top-32" hover={false}>
              <div className="p-3 w-fit rounded-2xl bg-white/10 mb-6">
                <Brain size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Methodologies & Design</h2>
              <p className="text-primary-foreground/80 mb-8">
                Beyond specific tools, I focus on core engineering principles that allow me to build adaptable and maintainable software.
              </p>
              
              <div className="space-y-4">
                {[
                  "Domain Driven Design (DDD)",
                  "Test Driven Development (TDD)",
                  "Microservices Architecture",
                  "Event Driven Systems",
                  "SOLID & Clean Code Principles",
                  "Agile & Scrum Methodologies"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sparkles size={16} className="text-primary-foreground/60" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 rounded-[2rem] bg-accent/30 border-none shadow-none" hover={false}>
              <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Team Leadership", "Technical Writing", "Mentoring", "Problem Solving", "Strategic Planning", "Project Management"].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-background border border-border text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">Wanna see these skills in action?</h3>
        <Link href="/projects">
          <Button variant="outline">Browse Case Studies</Button>
        </Link>
      </Section>
    </div>
  );
}
