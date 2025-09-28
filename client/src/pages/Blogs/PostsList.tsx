import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PostsList.module.css";
import { motion } from "framer-motion"
import Footer from "../../components/Footer/Footer";

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
      const res = await fetch("https://portfolio-site-k7n9.onrender.com/api/posts");
      const data: PostMeta[] = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

if (loading) {
  return (
    <div className={styles.postlist_wrapper}>
      <h1>All Blogs</h1>
      <ul>
        {[...Array(5)].map((_, i) => (
          <li key={i} className={styles.skeleton}></li>
        ))}
      </ul>
    </div>
  );
}
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
        <Footer />
    </div>
     </motion.div>
  );
}

export default PostsList;
