import { BlogPost } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

const blogPosts: BlogPost[] = [
  {
    title: 'First Blog Post',
    description: 'This is the first blog post.',
    image: '/path/to/image1.jpg',
    postDate: '2023-06-01',
    authorRating: 4.5,
  },
  {
    title: 'Second Blog Post',
    description: 'This is the second blog post.',
    image: '/path/to/image2.jpg',
    postDate: '2023-06-02',
    authorRating: 3.8,
  },
];

export default function handler(_: NextApiRequest, res: NextApiResponse<BlogPost[]>) {
    console.log('Blog Post Components')
  return res.status(200).json(blogPosts);
}
