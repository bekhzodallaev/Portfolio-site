import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact-message"; // ✅ default import

const app = express();
console.log(contactRoutes);
app.use(cors());
app.use(express.json());
app.use("/", contactRoutes); // ✅ this is now a router, not a function

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
