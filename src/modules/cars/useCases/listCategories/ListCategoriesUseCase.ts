import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/Categories/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.getAll();
  }
}
