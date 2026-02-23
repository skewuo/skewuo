import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Highlight, themes } from 'prism-react-renderer';
import { blogService } from '../services/blogService';
import type { BlogPost } from '../types/blog';

interface BlogPostForm {
  title: string;
  content: string;
  excerpt: string;
  tags: string;
  category: string;
  published: boolean;
  headerImage: {
    url: string;
    alt: string;
  };
}

export default function AdminBlogPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    category: '',
    published: false,
    headerImage: {
      url: '',
      alt: ''
    }
  });
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      console.log('Form submission started');
      console.log('Form data:', formData);

      // Validate required fields
      const requiredFields = ['title', 'content', 'excerpt', 'headerImage.url', 'headerImage.alt'];
      const missingFields = requiredFields.filter(field => {
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          return !formData[parent]?.[child];
        }
        return !formData[field];
      });

      if (missingFields.length > 0) {
        console.error('Missing required fields:', missingFields);
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      const postData: Omit<BlogPost, '_id' | 'slug'> = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        date: new Date().toISOString(),
        author: {
          name: 'Rob McElvenny',
          avatar: '/robmc.jpeg'
        }
      };

      console.log('Processed post data:', postData);

      try {
        const newPost = await blogService.createPost(postData);
        console.log('Response from server:', newPost);
        
        if (newPost) {
          alert('Blog post created successfully!');
          
          // Reset form
          setFormData({
            title: '',
            content: '',
            excerpt: '',
            tags: '',
            category: '',
            published: false,
            headerImage: {
              url: '',
              alt: ''
            }
          });

          // Redirect to the new post
          navigate(`/blog/${newPost.slug}`);
        } else {
          throw new Error('Failed to create blog post - no response from server');
        }
      } catch (apiError) {
        console.error('API call failed:', apiError);
        if (apiError instanceof TypeError && apiError.message === 'Failed to fetch') {
          throw new Error('Could not connect to the server. Please check if the backend is running.');
        }
        throw apiError;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to create blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name.startsWith('headerImage.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        headerImage: {
          ...prev.headerImage,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">Create Blog Post</h1>
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              {error}
            </div>
          )}
          
          {/* Editor/Preview Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              type="button"
              onClick={() => setPreviewMode(false)}
              className={`px-4 py-2 rounded-lg ${!previewMode ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode(true)}
              className={`px-4 py-2 rounded-lg ${previewMode ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
            >
              Preview
            </button>
          </div>

          {previewMode ? (
            <div className="space-y-8">
              {/* Header Image Preview */}
              {formData.headerImage.url && (
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <img 
                    src={formData.headerImage.url}
                    alt={formData.headerImage.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">{formData.title || 'Untitled Post'}</h2>
                  </div>
                </div>
              )}

              {/* Content Preview */}
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-4">{formData.title || 'Untitled Post'}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ inline, className, children }) {
                        const match = /language-(\w+)/.exec(className || '');
                        const language = match ? match[1] : '';
                        
                        if (!inline && language) {
                          return (
                            <Highlight
                              theme={themes.github}
                              code={String(children).replace(/\n$/, '')}
                              language={language}
                            >
                              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                  {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line })}>
                                      {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                      ))}
                                    </div>
                                  ))}
                                </pre>
                              )}
                            </Highlight>
                          );
                        }
                        return <code className={className}>{children}</code>;
                      },
                    }}
                  >
                    {formData.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header Image Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Header Image</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="headerImage.url" className="block text-foreground font-medium mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      id="headerImage.url"
                      name="headerImage.url"
                      value={formData.headerImage.url}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <label htmlFor="headerImage.alt" className="block text-foreground font-medium mb-2">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      id="headerImage.alt"
                      name="headerImage.alt"
                      value={formData.headerImage.alt}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                      placeholder="Descriptive text for the image"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-foreground font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-foreground font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-foreground font-medium mb-2">
                  Content (Markdown)
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={20}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-mono"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-foreground font-medium mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="tags" className="block text-foreground font-medium mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="rounded border-border text-primary focus:ring-ring"
                />
                <label htmlFor="published" className="text-foreground font-medium">
                  Publish immediately
                </label>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({
                    title: '',
                    content: '',
                    excerpt: '',
                    tags: '',
                    category: '',
                    published: false,
                    headerImage: {
                      url: '',
                      alt: ''
                    }
                  })}
                  className="px-6 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  disabled={isSubmitting}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating...' : 'Create Post'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
} 