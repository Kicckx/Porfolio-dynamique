import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import educationRoutes from './routes/education.js';
import experiencesRoutes from './routes/experiences.js';
import contactRoutes from './routes/contact.js';
import socialLinksRoutes from './routes/socialLinks.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/social-links', socialLinksRoutes);

// Gestion globale des erreurs
app.use(errorHandler);

export default app;
