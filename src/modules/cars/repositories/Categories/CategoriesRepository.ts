import { Category } from '../../model/Category';
import { CreateCategoryDTO } from '../../../../dtos/CreateCategoryDTO';
import { ICategoriesRepository } from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  findByName(name: string) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.name === name
    );

    if (categoryIndex > -1) {
      throw new Error('Category already exists!');
    }

    const category = this.categories[categoryIndex];

    return category;
  }

  create({ name, description }: CreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  getAll() {
    return this.categories;
  }
}
