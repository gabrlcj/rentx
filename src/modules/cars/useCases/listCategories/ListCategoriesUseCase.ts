import { Category } from "../../entities/Category";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/Categories/ICategoriesRepository";
@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.getAll();
  }
}
