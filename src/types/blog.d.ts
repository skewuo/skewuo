export interface BlogPost {
    _id?: string;
    title: string;
    slug?: string;
    content: string;
    excerpt: string;
    date?: string | Date;
    headerImage: {
        url: string;
        alt: string;
    };
    tags?: string[];
    author?: {
        name: string;
        avatar: string;
    };
    readingTime?: string;
    category?: string;
    published?: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}
