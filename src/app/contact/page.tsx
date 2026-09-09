'use client';

import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <SectionHeader 
          title="Mari Terhubung" 
          subtitle="Tertarik berkolaborasi terkait infrastruktur, jaringan, atau pengelolaan data Pemkab Pacitan? Hubungi melalui form atau kanal berikut."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Hubungi Saya</h2>
              <p className="text-muted-foreground max-w-sm">
                System Engineer & Data Analyst Pemkab Pacitan. Terbuka untuk diskusi infrastruktur, keamanan jaringan, dan tata kelola data.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub", value: "github.com/username", href: "https://github.com" },
                { icon: Twitter, label: "Twitter", value: "@username", href: "https://twitter.com" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-accent/20 border border-border/50 hover:bg-accent/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-background border border-border group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Card className="bg-primary text-primary-foreground p-8 rounded-[2rem] border-none shadow-xl shadow-primary/20" hover={false}>
              <div className="flex items-center gap-4 mb-4">
                <MapPin size={24} className="text-primary-foreground/60" />
                <h3 className="text-lg font-bold">Lokasi</h3>
              </div>
              <p className="text-primary-foreground/80">
                Pemerintah Kabupaten Pacitan, Jawa Timur — Indonesia. Mengelola infrastruktur server & jaringan dan publikasi data daerah.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-8 md:p-12 rounded-[3rem] border-border/50 shadow-sm" hover={false}>
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-primary" />
                <h2 className="text-2xl font-bold">Send a Message</h2>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-accent/20 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-accent/20 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-5 py-4 rounded-2xl bg-accent/20 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-2xl bg-accent/20 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <Button className="w-full py-4 rounded-2xl gap-2 text-lg">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
