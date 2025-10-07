import express from 'express';
import dotenv from 'dotenv';
import testRouter from './routes/test.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/test', testRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
