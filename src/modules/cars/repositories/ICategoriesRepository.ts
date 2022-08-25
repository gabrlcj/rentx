import { CreateCategoryDTO } from '../../../dtos/CreateCategoryDTO';
import { Category } from '../model/Category';

export interface ICategoriesRepository {
  findByName(name: string): Category;
  getAll(): Category[];
  create({ name, description }: CreateCategoryDTO): void;
}
