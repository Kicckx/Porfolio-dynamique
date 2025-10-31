import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectsController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Routes publiques
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Routes admin
router.post('/', verifyToken, createProject);
router.put('/:id', verifyToken, updateProject);
router.delete('/:id', verifyToken, deleteProject);

export default router;
