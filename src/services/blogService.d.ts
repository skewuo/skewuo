import { BlogPost } from '../types/blog';
export declare const blogService: {
    getAllPosts(): Promise<BlogPost[]>;
    getPostBySlug(slug: string): Promise<BlogPost | null>;
};
