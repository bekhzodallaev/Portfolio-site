import React from "react";
import ReactMarkdown from "react-markdown";

interface PostProps {
  content: string;
  metadata: { title: string; date: string };
}

function Posts({ content, metadata }: PostProps) {
  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Posts;
