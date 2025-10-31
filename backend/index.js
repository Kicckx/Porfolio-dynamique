import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { createClient } from '@supabase/supabase-js';

// Import des routes
import usersRoutes from './routes/users.js';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import experiencesRoutes from './routes/experiences.js';
import educationRoutes from './routes/education.js';
import socialLinksRoutes from './routes/social_links.js';
import contactInfoRoutes from './routes/contact_info.js';

dotenv.config();

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', usersRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/social_links', socialLinksRoutes);
app.use('/api/contact_info', contactInfoRoutes);

app.listen(port, () => console.log(`Backend running on port ${port}`));
