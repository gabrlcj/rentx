import { CreateCategoryDTO } from "../../../../dtos/CreateCategoryDTO";
import { Category } from "../../entities/Category";

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category | null>;
  create({ name, description }: CreateCategoryDTO): Promise<Category>;
  getAll(): Promise<Category[]>;
}
