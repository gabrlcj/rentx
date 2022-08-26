import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/Categories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.getAll();

  return res.json({ categories });
});

export { categoriesRoutes };
