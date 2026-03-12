import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoute from './routes/chat.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Use chat route
app.use('/api', chatRoute);

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
