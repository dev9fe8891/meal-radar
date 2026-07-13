import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
