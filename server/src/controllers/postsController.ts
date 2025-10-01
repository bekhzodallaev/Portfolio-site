import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Request, Response } from "express";
import cron from "node-cron";


interface PostMeta {
  title: string;
  date: string;
  [key: string]: any;
}


const postsDir = path.join(__dirname, "../../posts");


let cachedPosts: (PostMeta & { slug: string })[] = [];
let cachedPostContents: Record<string, { metadata: PostMeta; content: string }> = {};

function loadAllPosts() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  cachedPosts = files.map(file => {
    const slug = file.replace(".md", "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const { data, content:cleanContent } = matter(content);
     
    cachedPostContents[slug] = { metadata: data as PostMeta, content:cleanContent };

    return { slug, ...(data as PostMeta) };
  });

  cachedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  console.log(`Loaded ${cachedPosts.length} posts at ${new Date().toISOString()}`);
}

// Initial load
loadAllPosts();

// Schedule cache refresh every 5 minutes
cron.schedule("*/5 * * * *", () => {
  console.log("Refreshing posts cache...");
  loadAllPosts();
});

// ✅ List all posts (cached)
export const getAllPosts = (_req: Request, res: Response): void => {
  res.json(cachedPosts);
};

// ✅ Get single post by slug (cached)
export const getPostBySlug = (req: Request, res: Response): void => {
  const slug = req.params.slug;

  const post = cachedPostContents[slug];
  if (!post) {
    res.status(404).json({ error: "Post not found" });
    return;
  }

  res.json({ slug, metadata: post.metadata, content: post.content });
};