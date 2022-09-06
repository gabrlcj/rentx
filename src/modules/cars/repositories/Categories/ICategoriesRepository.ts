import { CreateCategoryDTO } from "../../../../dtos/CreateCategoryDTO";
import { Category } from "../../entities/Category";

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category | null>;
  getAll(): Promise<Category[]>;
}
