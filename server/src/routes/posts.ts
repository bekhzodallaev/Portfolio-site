import { Router } from "express";

import { getAllPosts, getPostBySlug } from "../controllers/postsController";

const router = Router();

router.get("/", getAllPosts);
router.get("/:slug", getPostBySlug);

export default router;
