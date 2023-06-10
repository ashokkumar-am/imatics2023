import { BlogPost } from "@/types";

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostComponent = ({ post }: BlogPostProps) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <img src={post.image} alt={post.title} />
      <p>Posted on: {post.postDate}</p>
      <p>Author Rating: {post.authorRating}</p>
    </div>
  );
};

export default BlogPostComponent;
