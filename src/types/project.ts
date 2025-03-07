export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
  paper?: boolean;
}
