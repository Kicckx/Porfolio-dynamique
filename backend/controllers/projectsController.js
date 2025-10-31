import { supabase } from '../config/supabaseClient.js';

export const getAllProjects = async (req, res) => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order_index');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  if (error) return res.status(404).json({ error: 'Projet non trouvé' });
  res.json(data);
};

export const createProject = async (req, res) => {
  const { title, description, image_url, link } = req.body;
  const { data, error } = await supabase
    .from('projects')
    .insert([{ title, description, image_url, link }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('projects')
    .update(req.body)
    .eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Projet supprimé' });
};
