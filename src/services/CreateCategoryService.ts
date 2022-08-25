import { CategoriesRepository } from '../repositories/CategoriesRepository';

type CreateCategoryParams = {
  name: string;
  description: string;
};

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: CreateCategoryParams) {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error('Category already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export { CreateCategoryService };
