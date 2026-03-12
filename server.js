import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// Root route
app.get("/", (req, res) => {
  res.send("Zedpea Chatbot API is running 🚀");
});

// Chat API
app.use("/api", chatRoute);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
