import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";
import { blogs } from "@/lib/data";
import Link from "next/link";
import { Calendar, ChevronRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <SectionHeader 
          title="Catatan Teknis" 
          subtitle="Artikel tentang infrastruktur, keamanan jaringan, dan tata kelola data di lingkungan Pemkab Pacitan."
        />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {blogs.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <Card className="flex flex-col md:flex-row gap-6 p-8 transition-all hover:bg-accent/10 border-border/50 hover:border-primary/30">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 bg-accent px-2 py-1 rounded">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 bg-accent px-2 py-1 rounded">
                      <Clock size={12} /> {post.readingTime}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5 rounded">
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-primary flex items-center gap-1 translate-x-0 group-hover:translate-x-1 transition-transform">
                      Read Article <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-accent/30 rounded-[3rem] mt-20 p-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Want more technical deep dives?</h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I regularly share my findings and experiences in software engineering. Follow me on LinkedIn or GitHub for more frequent updates.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Subscribe (RSS)</Button>
        </div>
      </Section>
    </div>
  );
}
