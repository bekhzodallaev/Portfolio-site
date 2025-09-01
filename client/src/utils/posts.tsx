import matter from "gray-matter";

export interface PostMetaData {
  title: string;
  date: string;
  [key: string]: any;
}

export interface ParsedPost {
  metadata: PostMetaData;
  content: string;
}

export function parsePost(fileContent: string): ParsedPost {
  const { data, content } = matter(fileContent);
  return { metadata: data as PostMetaData, content };
}
