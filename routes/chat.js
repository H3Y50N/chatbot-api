import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const API_KEY = process.env.GEMINI_API_KEY;

router.post('/chat', async (req, res) => {
  try {
    const { contents, generationConfig } = req.body;

    if (!API_KEY) {
      return res.status(500).json({ error: { message: "API key is missing on the server." } });
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, generationConfig }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: { message: "Internal server error" } });
  }
});

export default router;
