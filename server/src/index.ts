import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact-message";
import postsRoute from "./routes/posts";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes); 
app.use("/api/posts", postsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
