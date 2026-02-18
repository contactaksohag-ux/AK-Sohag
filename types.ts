
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  role: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
