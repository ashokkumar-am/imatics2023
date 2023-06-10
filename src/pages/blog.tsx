import BlogPostComponent from '@/components/BlogPost';
import { BlogPost } from '@/types';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const blog = () => {
  const { data: blogPosts, error } = useSWR<BlogPost[]>('/api/blog-posts', fetcher);

  if (error) {
    return <div>Error loading blog posts.</div>;
  }

  if (!blogPosts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {blogPosts?.map((post) => (
        <BlogPostComponent key={post.title} post={post} />
      ))}
    </div>
  );
};

export default blog;
