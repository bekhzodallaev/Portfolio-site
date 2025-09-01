import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PostsList.module.css";


interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

function PostsList() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("http://localhost:5000/api/posts");
      const data: PostMeta[] = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className={styles.postlist_wrapper}>
      <h1>All Blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className={styles.link}>
              <p>{post.title}</p>
              <p>{post.date}</p>
            </Link>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
