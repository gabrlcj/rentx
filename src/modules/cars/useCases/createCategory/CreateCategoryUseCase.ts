import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/Categories/ICategoriesRepository";

type CreateCategoryParams = {
  name: string;
  description: string;
};
@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({
    name,
    description,
  }: CreateCategoryParams): Promise<Category> {
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    const category = await this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}
