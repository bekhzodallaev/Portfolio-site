import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Posts from "./Posts";

interface PostData {
  slug: string;
  metadata: { title: string; date: string };
  content: string;
}

function PostsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`http://localhost:5000/api/posts/${slug}`);
      if (!res.ok) {
        setPost(null);
      } else {
        const data: PostData = await res.json();
        setPost(data);
      }
      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <Link to="/blog">← Back to all posts</Link>
      <Posts content={post.content} metadata={post.metadata} />
    </div>
  );
}

export default PostsPage;
