import { ICategoriesRepository } from '../../repositories/Categories/ICategoriesRepository';

type CreateCategoryParams = {
  name: string;
  description: string;
};

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: CreateCategoryParams) {
    if (this.categoriesRepository.findByName(name)) {
      throw new Error('Category already exists');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}
