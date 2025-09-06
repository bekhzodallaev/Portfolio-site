import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Request, Response } from "express";

interface PostMeta {
  title: string;
  date: string;
  [key: string]: any;
}


const postsDir = path.join(__dirname, "../../posts"); // go up to root

// ✅ List all posts
export const getAllPosts = (req: Request, res: Response): void => {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts: (PostMeta & {slug:string})[] = files.map(file => {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data } = matter(content);
    return { slug, ...(data as PostMeta)}; // metadata only
  });
  
  posts.sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date).getTime());
  res.json(posts);
};

// ✅ Get single post by slug
export const getPostBySlug = (req: Request, res: Response): void => {
  const slug = req.params.slug;
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: "Post not found" });
    return; // make sure function ends
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  res.json({ slug, metadata: data, content });
};
