import { projects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Code, ExternalLink, Github, Terminal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIcon } from "@/lib/icons";
import { WebsiteThumbnail } from "@/components/ui/WebsiteThumbnail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tags.map(tag => {
                const Icon = getIcon(tag);
                return (
                  <span key={tag} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    {Icon && <Icon size={16} />}
                    {tag}
                  </span>
                );
              })}
            </div>
            
            <WebsiteThumbnail
              url={project.liveUrl}
              title={project.title}
              fallbackSrc={project.image}
              className="aspect-video w-full rounded-3xl mb-12 border border-border shadow-2xl"
              priority
            />

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Terminal size={24} className="text-primary" /> Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description} This project represents a significant engineering effort focused on solving specific real-world problems. We prioritized modularity and performance from day one to ensure a scalable architecture.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The primary goal was to handle high concurrent user traffic while maintaining sub-second response times. We faced constraints in terms of legacy API integration and complex data synchronization requirements that needed to be addressed without compromising on system reliability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">The Solution & Architecture</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We opted for a micro-frontend architecture using Next.js for its robust routing and server-side rendering capabilities. For the backend, we implemented a distributed system that leverages edge caching and globally distributed databases to minimize latency.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Implemented advanced state management for real-time updates.</li>
                  <li>Automated CI/CD pipelines with comprehensive testing suites.</li>
                  <li>Integrated multiple third-party services via secure, rate-limited adapters.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">Outcome & Impact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The final product resulted in a 50% increase in operational efficiency and received highly positive feedback for its intuitive interface. The architecture proved to be highly resilient, successfully handling 2x the expected peak load during initial launch phases.
                </p>
              </section>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-3xl border border-border bg-accent/20 sticky top-32">
              <h3 className="text-xl font-bold mb-6">Project Metadata</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Status</p>
                  <p className="font-medium inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" /> Shipped & Live
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Timeline</p>
                  <p className="font-medium">4 Months </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Key Tech</p>
                  <p className="font-medium">App Router, TypeScript, RSC</p>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col gap-4">
                {project.liveUrl && (
                  <Link href={project.liveUrl}>
                    <Button className="w-full gap-2 transition-transform hover:-translate-y-0.5">
                      Live Preview <ExternalLink size={18} />
                    </Button>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl}>
                    <Button variant="outline" className="w-full gap-2 transition-transform hover:-translate-y-0.5">
                      Source Code <Github size={18} />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
