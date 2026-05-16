export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author?: string;
  readTime?: number;
}

export interface Category {
  name: string;
  count: number;
}
