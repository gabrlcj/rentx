import { Category } from '../model/Category';
import { CreateCategoryDTO } from '../dtos/CreateCategoryDTO';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  findByName(name: string) {
    const category = this.categories.find((category) => category.name === name);

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

export { CategoriesRepository };
