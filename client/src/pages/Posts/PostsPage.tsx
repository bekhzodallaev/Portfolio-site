import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Posts from "./Posts";
import styles from "./Posts.module.css"
import telegramGif from "../../assets/blogs/icons8-telegram.gif"

interface PostData {
  slug: string;
  metadata: { title: string; date: string };
  content: string;
}

function PostsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState<PostData[]>([]);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`https://portfolio-site-k7n9.onrender.com/api/posts/${slug}`);
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

    // Fetch all posts for prev/next navigation
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://portfolio-site-k7n9.onrender.com/api/posts");
      if (res.ok) {
        const data: PostData[] = await res.json();
        setAllPosts(data);
      }
    }
    fetchPosts();
  }, []);


  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className={styles.postpage_container}>
      <Posts content={post.content} metadata={post.metadata} />
      <div className={styles.link_wrappper}>
        <p>I am also writing articles, tutorials and some tech-related stuff here on my channel
        </p>
        <a href="https://t.me/webdevdaily"  target='_blank' rel="noopener">
         <img src={telegramGif} alt="Telegram Gif" />
        </a>
      </div>
     <div className={styles.post_links}>
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`}>← Previous</Link>
        ) : (
          <span />
        )}

        <Link to="/blog">See More</Link>

        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`}>Next →</Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}

export default PostsPage;
