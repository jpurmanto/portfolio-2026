import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiGo, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker,
  SiPrisma,
  SiStripe,
  SiMongodb,
  SiOpenai,
  SiSocketdotio,
  SiExpress,
  SiRedis,
  SiLinux,
  SiProxmox,
  SiNginx,
  SiMikrotik,
  SiFortinet
} from 'react-icons/si';
import { IconType } from 'react-icons';

export const iconMap: Record<string, IconType> = {
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Go': SiGo,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'Docker': SiDocker,
  'Prisma': SiPrisma,
  'Stripe': SiStripe,
  'MongoDB': SiMongodb,
  'OpenAI': SiOpenai,
  'Socket.io': SiSocketdotio,
  'Express': SiExpress,
  'Redis': SiRedis,
  // System Engineer & Data Analyst - Pemkab Pacitan
  'Linux': SiLinux,
  'Linux Server Administration': SiLinux,
  'Proxmox': SiProxmox,
  'Proxmox VE': SiProxmox,
  'Docker Engine': SiDocker,
  'Nginx': SiNginx,
  'Mikrotik': SiMikrotik,
  'Fortigate': SiFortinet,
  'Fortinet': SiFortinet,
  'Virtualization': SiProxmox,
  'Network Management': SiMikrotik,
};

export function getIcon(name: string) {
  return iconMap[name] || null;
}
