import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { Brain, Code2, Cpu, Database, Globe, Layout, Server, ShieldCheck, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";

export default function SkillsPage() {
  const categories = [
    { name: 'Infrastructure', icon: Server, color: 'text-blue-500', label: 'Infrastructure' },
    { name: 'Network', icon: ShieldCheck, color: 'text-emerald-500', label: 'Network & Security' },
    { name: 'DevOps', icon: Globe, color: 'text-purple-500', label: 'DevOps' },
    { name: 'Data', icon: BarChart3, color: 'text-orange-500', label: 'Data' },
    { name: 'Database', icon: Database, color: 'text-pink-500', label: 'Database' },
  ];

  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <SectionHeader 
          title="Technical Expertise" 
          subtitle="Keahlian yang digunakan sehari-hari untuk menjaga stabilitas sistem dan mengelola data di Pemkab Pacitan."
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
                    <h2 className="text-xl font-bold">{cat.label}</h2>
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
              <h2 className="text-2xl font-bold mb-4">Metodologi & Tata Kelola</h2>
              <p className="text-primary-foreground/80 mb-8">
                Prinsip operasional untuk layanan pemerintah yang handal dan data yang dapat dipercaya.
              </p>
              
              <div className="space-y-4">
                {[
                  "Satu Data Indonesia (SDI)",
                  "Manajemen Keamanan Informasi",
                  "High Availability & Backup Strategy",
                  "Network Segmentation & Firewall Policy",
                  "Virtualization & Containerization",
                  "Monitoring & Preventive Maintenance"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-primary-foreground/60" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 rounded-[2rem] bg-accent/30 border-none shadow-none" hover={false}>
              <h3 className="text-xl font-bold mb-6">Tanggung Jawab</h3>
              <div className="flex flex-wrap gap-2">
                {["System Stability", "Data Collection & Validation", "Data Publication", "Infrastructure Maintenance", "Network Security", "Public Service Continuity"].map(skill => (
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
        <h3 className="text-xl font-bold mb-4">Lihat implementasi di portal Pemkab Pacitan</h3>
        <Link href="/projects">
          <Button variant="outline">Lihat Website Kelolaan</Button>
        </Link>
      </Section>
    </div>
  );
}
