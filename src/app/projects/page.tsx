import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ChevronRight, Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";
import { WebsiteThumbnail } from "@/components/ui/WebsiteThumbnail";

export default function ProjectsPage() {
  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <SectionHeader 
          title="Website & Infrastruktur Kelolaan" 
          subtitle="Portal strategis dan infrastruktur yang saya kelola di Pemkab Pacitan untuk layanan publik dan keterbukaan data."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col h-full overflow-hidden group">
              <WebsiteThumbnail
                url={project.liveUrl}
                title={project.title}
                fallbackSrc={project.image}
                className="aspect-video w-full"
              />
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => {
                    const Icon = getIcon(tag);
                    return (
                      <span key={tag} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-accent text-accent-foreground border border-border/50">
                        {Icon && <Icon size={12} className="text-primary" />}
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between border-t border-border/50 pt-4 mt-6">
                <Link href={`/projects/${project.slug}`} className="text-sm font-semibold text-primary inline-flex items-center group/link">
                  Case Study <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-primary/5 rounded-[3rem]">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Penasaran dengan stack yang digunakan?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Setiap portal berjalan di atas Linux, Proxmox VE, dan Docker Engine dengan pengamanan Mikrotik & Fortigate. Lihat detail keahlian di halaman skills.
          </p>
          <Link href="/skills">
            <Button variant="outline">Lihat Keahlian</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
