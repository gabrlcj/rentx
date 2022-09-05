import { ICategoriesRepository } from "../../repositories/Categories/ICategoriesRepository";

type CreateCategoryParams = {
  name: string;
  description: string;
};

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: CreateCategoryParams) {
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
