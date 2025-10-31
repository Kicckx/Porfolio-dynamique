import express from 'express';
import { supabase } from '../index.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});
