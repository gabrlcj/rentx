import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/Specifications/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  const specification = specificationService.execute({ name, description });

  return res.status(201).json({ specification });
});

export { specificationRoutes };
