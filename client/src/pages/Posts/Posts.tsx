import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Posts.module.css"


interface PostProps {
  content: string;
  metadata:{title:string, date:string}
}

function Posts({ content, metadata }: PostProps) {
    console.log("Rendering Posts component:");
  console.log("Metadata:", metadata);
  console.log("Content preview:", content.substring(0, 200));
  
  return (
    <div className={styles.posts_container}>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Posts;
