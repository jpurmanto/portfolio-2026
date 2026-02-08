import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Code, Database, Globe, Layers } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { projects, skills } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const mainSkills = skills.slice(0, 6);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <Section className="flex flex-col items-center text-center pt-8 md:pt-16">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          System Engineer<br />System Stability. Seamless Operations.
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10">
          Hi, I'm a <span className="text-foreground font-semibold">System Engineer</span> seorang pelaksana di bidang IT yang mempunayi tugas merancang, membangun, dan memelihara sistem yang kompleks, mulai dari software, hardware, hingga jaringan di Pemkab. Pacitan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              View My Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Featured Projects</h2>
          <Link href="/projects" className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            View All Projects <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col overflow-hidden group">
              <div className="aspect-video w-full relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map(tag => {
                    const Icon = getIcon(tag);
                    return (
                      <span key={tag} className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-accent text-accent-foreground border border-border/50">
                        {Icon && <Icon size={12} className="text-primary" />}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-primary inline-flex items-center group/link">
                  Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills Preview */}
      <Section className="bg-accent/30 rounded-[3rem]">
        <SectionHeader 
          title="Core Capabilities" 
          subtitle="A comprehensive toolkit for modern software development."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
              <Code size={24} />
            </div>
            <h3 className="font-bold mb-2">Frontend Development</h3>
            <p className="text-sm text-muted-foreground">Building performant, accessible, and responsive user interfaces with React and Next.js.</p>
          </Card>
          
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-green-500/10 text-green-600 mb-4">
              <Database size={24} />
            </div>
            <h3 className="font-bold mb-2">Backend & Databases</h3>
            <p className="text-sm text-muted-foreground">Architecting scalable server-side systems and designing efficient database schemas.</p>
          </Card>
          
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-600 mb-4">
              <Layers size={24} />
            </div>
            <h3 className="font-bold mb-2">System Design</h3>
            <p className="text-sm text-muted-foreground">Developing distributed systems with modular, maintainable, and testable architectures.</p>
          </Card>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = getIcon(skill.name);
            return (
              <div key={skill.name} className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-border bg-background/50 hover:border-primary/30 hover:bg-background hover:shadow-lg transition-all group">
                {Icon && <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />}
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="mb-20">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's build something<br />extraordinary together.</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            Whether you have a specific project in mind or just want to chat about technical challenges, I'm always open to connecting.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
