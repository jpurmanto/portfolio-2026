import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, ExternalLink, Mail, Server, BarChart3, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Section className="md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Saya <span className="text-primary tracking-tighter">PURMANTO.</span> System Engineer & Data Analyst di Pemkab Pacitan.
            </h1>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6">
              <p>
                Sebagai <strong className="text-foreground">System Engineer</strong>, saya adalah pelaksana di bidang IT yang merancang, membangun, dan memelihara sistem yang kompleks — mulai dari software, hardware, hingga jaringan di lingkungan Pemerintah Kabupaten Pacitan.
              </p>
              <p>
                Sebagai <strong className="text-foreground">Data Analyst</strong>, saya mengumpulkan, menganalisis, dan melaksanakan publikasi data di Kabupaten Pacitan. Data yang terkelola dengan baik menjadi fondasi kebijakan berbasis bukti dan transparansi pelayanan publik.
              </p>
              <p>
                Fokus saya adalah menjaga <em>system stability & seamless operations</em> untuk layanan digital pemerintah, sekaligus memastikan data sektoral dapat diakses publik secara terbuka melalui ekosistem portal data.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="gap-2">
                Download CV <Download size={18} />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="gap-2">
                  Hubungi Saya <Mail size={18} />
                </Button>
              </Link>
            </div>

            {/* Pillars */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-2xl bg-accent/30 border border-border/50">
                <Server className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-sm">Infrastructure</p>
                  <p className="text-xs text-muted-foreground">Linux • Proxmox VE • Docker Engine • Nginx</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-accent/30 border border-border/50">
                <ShieldCheck className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-sm">Network & Security</p>
                  <p className="text-xs text-muted-foreground">Mikrotik • Fortigate • Segmentasi & Firewall</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-accent/30 border border-border/50">
                <BarChart3 className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-sm">Data & Publikasi</p>
                  <p className="text-xs text-muted-foreground">Satu Data • Open Data • Visualisasi • Geoportal</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 rounded-2xl bg-accent/30 border border-border/50">
                <Globe className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-sm">Layanan Publik Digital</p>
                  <p className="text-xs text-muted-foreground">5 portal strategis Pemkab Pacitan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 space-y-8">
            <Card className="bg-accent/30 border-none shadow-none" hover={false}>
              <h3 className="text-xl font-bold mb-4">Prinsip Kerja</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Stability First</p>
                    <p className="text-sm text-muted-foreground">Uptime, backup, dan disaster recovery adalah prioritas utama layanan pemerintah.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Security by Design</p>
                    <p className="text-sm text-muted-foreground">Segmentasi jaringan dan kebijakan firewall yang ketat untuk melindungi data kritikal.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Data-Driven</p>
                    <p className="text-sm text-muted-foreground">Data yang valid, terstandar, dan terbuka untuk keputusan yang lebih tepat.</p>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Website Kelolaan</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="https://pacitankab.go.id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">pacitankab.go.id <ExternalLink size={14} /></a></li>
                <li><a href="https://data.pacitankab.go.id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">data.pacitankab.go.id <ExternalLink size={14} /></a></li>
                <li><a href="https://opendata.pacitankab.go.id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">opendata.pacitankab.go.id <ExternalLink size={14} /></a></li>
                <li><a href="https://geoportal.pacitankab.go.id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">geoportal.pacitankab.go.id <ExternalLink size={14} /></a></li>
                <li><a href="https://dataviz.pacitankab.go.id" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">dataviz.pacitankab.go.id <ExternalLink size={14} /></a></li>
              </ul>
              <p className="text-primary-foreground/80 mt-6 text-sm">
                Seluruh portal dikelola dengan infrastruktur virtualisasi Proxmox & container Docker di atas Linux Server.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Peran & Tanggung Jawab" subtitle="Dua peran utama di Pemkab Pacitan yang saling melengkapi." />
        <div className="space-y-12">
          {[
            {
              role: "System Engineer",
              company: "Pemerintah Kabupaten Pacitan",
              period: "Saat ini",
              description: "Merancang, membangun, dan memelihara sistem yang kompleks mencakup software, hardware, dan jaringan. Mengelola virtualisasi Proxmox VE, container Docker Engine, administrasi Linux server, serta manajemen jaringan dan keamanan dengan Mikrotik & Fortigate untuk memastikan layanan tetap stabil dan aman.",
            },
            {
              role: "Data Analyst",
              company: "Pemerintah Kabupaten Pacitan",
              period: "Saat ini",
              description: "Mengumpulkan, menganalisis, dan melaksanakan publikasi data Kabupaten Pacitan. Mendukung Satu Data Indonesia melalui portal Data, Open Data, Geoportal, dan Dataviz agar data sektoral valid, terpadu, dan dapat digunakan publik serta pimpinan untuk pengambilan keputusan.",
            },
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
              <p className="text-muted-foreground max-w-3xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
