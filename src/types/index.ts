export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  content?: string; // MDX content
}

export interface Skill {
  name: string;
  category: 'Language' | 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tool' | 'Infrastructure' | 'Network' | 'Data';
  level: number; // 1-100
  icon?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content?: string; // MDX content
}
