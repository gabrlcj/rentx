import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/Categories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.getAll();
  }
}
