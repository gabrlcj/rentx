import { container } from "tsyringe";
import { IUserRepository } from "../../modules/accounts/repositories/Users/IUserRepository";
import { UserRepository } from "../../modules/accounts/repositories/Users/UserRepository";
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

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
