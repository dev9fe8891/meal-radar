import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === "production";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../dist");

app.use(express.json());

if (!isProduction) {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
  });
});

app.post("/api/newsletter", (req, res) => {
  const { name, email } = req.body;
  const errors = {};

  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  return res.status(201).json({
    message: "You have successfully subscribed to the newsletter.",
  });
});

app.use("/api", (req, res) => {
  res.status(404).json({
    message: "API route not found.",
  });
});

if (isProduction) {
  app.use(express.static(distPath));

  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
