import { blogs } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-20">
      <Section className="md:pt-16 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Articles
        </Link>
        
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-primary" /> {post.readingTime}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-border py-6 mt-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest bg-accent px-3 py-1 rounded-full text-foreground">
                  <Tag size={12} className="text-muted-foreground" /> {tag}
                </span>
              ))}
            </div>
            <button className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
              <Share2 size={20} />
            </button>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-pre:bg-accent/50 prose-pre:border prose-pre:border-border">
          <p className="text-xl text-muted-foreground leading-relaxed italic mb-12 border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>

          <h2>Introduction</h2>
          <p>
            In modern software development, scaling is often misunderstood. It's not just about adding more servers or increasing infrastructure capacity. True scalability begins at the architectural level, where decisions about data flow, state management, and component boundaries determine the ultimate limits of your system.
          </p>

          <h2>Core Architectural Patterns</h2>
          <p>
            When we look at high-performance systems, several recurring patterns emerge. For instance, the transition from monolithic architectures to micro-frontend or micro-service models allows teams to decouple deployments and optimize specific parts of the system independently.
          </p>
          
          <pre><code>{`// Example of a scalable pattern
export function createScalableSystem(config) {
  const { adapters, fallback } = config;
  
  return async (request) => {
    try {
      return await adapters.primary.process(request);
    } catch (error) {
       console.warn('Primary system failed, falling back...');
       return await fallback.process(request);
    }
  };
}`}</code></pre>

          <h2>The Human Element of Engineering</h2>
          <p>
            Often overlooked is the impact of architecture on developer experience. A system that is "technically perfect" but impossible to navigate for a new engineer is ultimately a failed architecture. We must balance technical excellence with readability and maintainability.
          </p>

          <h2>Conclusion</h2>
          <p>
            Scaling a system is a continuous journey of identifying bottlenecks and making calculated trade-offs. By focusing on fundamental design principles and keeping user experience at the core, we can build robust applications that stand the test of time.
          </p>
        </div>
        
        <footer className="mt-20 pt-10 border-t border-border flex flex-col items-center">
          <h3 className="text-xl font-bold mb-6">Enjoyed this article?</h3>
          <div className="flex gap-4">
            <Link href="/blog">
              <Button variant="outline">Browse more articles</Button>
            </Link>
          </div>
        </footer>
      </Section>
    </article>
  );
}
