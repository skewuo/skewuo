import { BlogPost } from '../types/blog';

const API_URL = 'http://localhost:3001/api';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const handleResponse = async (response: Response) => {
  const text = await response.text();
  console.log('Raw response:', text);
  
  try {
    return text ? JSON.parse(text) : null;
  } catch (e) {
    console.error('Failed to parse response:', e);
    throw new Error(`Invalid JSON response: ${text}`);
  }
};

export const blogService = {
  // Get all blog posts
  async getAllPosts(): Promise<BlogPost[]> {
    try {
      console.log('Fetching all posts from:', `${API_URL}/blog`);
      const response = await fetch(`${API_URL}/blog`, {
        method: 'GET',
        headers: defaultHeaders,
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        const error = await handleResponse(response);
        throw new Error(error?.message || 'Failed to fetch blog posts');
      }

      const data = await handleResponse(response);
      return data || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  },

  // Get a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await fetch(`${API_URL}/blog/${slug}`, {
        method: 'GET',
        headers: defaultHeaders,
      });
      
      if (!response.ok) {
        const error = await handleResponse(response);
        throw new Error(error?.message || 'Failed to fetch blog post');
      }

      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw error;
    }
  },
}; 