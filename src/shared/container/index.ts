import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/Categories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/Categories/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/Specifications/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/Specifications/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);
