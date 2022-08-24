import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = categoriesRepository.create({ name, description });

  return res.status(201).json({ category });
});

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.getAll();

  return res.json({ categories });
});

export { categoriesRoutes };
