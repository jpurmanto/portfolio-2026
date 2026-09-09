import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, BarChart3, Globe, Layers, Server, ShieldCheck, Database } from "lucide-react";
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
          System Engineer & Data Analyst — Pemkab Pacitan
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          System Stability.<br />Data untuk Keputusan.
        </h1>
        
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-10">
          Saya adalah <span className="text-foreground font-semibold">System Engineer & Data Analyst</span> di Pemerintah Kabupaten Pacitan. Sebagai System Engineer, saya merancang, membangun, dan memelihara sistem yang kompleks — mulai dari software, hardware, hingga jaringan. Sebagai Data Analyst, saya mengumpulkan, menganalisis, dan mempublikasikan data Kabupaten Pacitan untuk mendukung kebijakan berbasis data.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Lihat Website Kelolaan <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Hubungi Saya
            </Button>
          </Link>
        </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Website Kelolaan</h2>
          <Link href="/projects" className="group flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Lihat Semua <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col overflow-hidden group">
              <div className="aspect-video w-full relative overflow-hidden bg-accent/50 flex items-center justify-center">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
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
              <CardFooter className="flex justify-between items-center">
                <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-primary inline-flex items-center group/link">
                  Detail <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                    <Globe size={12} /> Live
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills Preview */}
      <Section className="bg-accent/30 rounded-[3rem]">
        <SectionHeader 
          title="Core Capabilities" 
          subtitle="Keahlian utama dalam infrastruktur, jaringan, dan analisis data untuk layanan pemerintah."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-600 mb-4">
              <Server size={24} />
            </div>
            <h3 className="font-bold mb-2">Infrastructure & Virtualization</h3>
            <p className="text-sm text-muted-foreground">Linux Server Administration, Proxmox VE, dan Docker Engine untuk layanan yang stabil, efisien, dan mudah dipelihara.</p>
          </Card>
          
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-600 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold mb-2">Network & Security</h3>
            <p className="text-sm text-muted-foreground">Manajemen jaringan dan keamanan dengan Mikrotik & Fortigate — segmentasi, firewall policy, dan monitoring.</p>
          </Card>
          
          <Card className="bg-background/50 border-none shadow-none" hover={false}>
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-600 mb-4">
              <BarChart3 size={24} />
            </div>
            <h3 className="font-bold mb-2">Data Analysis & Publikasi</h3>
            <p className="text-sm text-muted-foreground">Pengumpulan, analisis, dan publikasi data Kabupaten Pacitan melalui portal Data, Open Data, Geoportal, dan Dataviz.</p>
          </Card>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
            const Icon = getIcon(skill.name);
            return (
              <div key={skill.name} className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-border bg-background/50 hover:border-primary/30 hover:bg-background hover:shadow-lg transition-all group">
                {Icon && <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />}
                <span className="font-medium text-foreground text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="mb-20">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Kelola sistem yang handal,<br />sajikan data yang bermakna.</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            Mengelola 5 portal strategis Pemkab Pacitan — dari website utama hingga geoportal dan visualisasi data — untuk transparansi dan layanan publik yang lebih baik.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-8">
              Mulai Kolaborasi
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
