import { Category } from "../../entities/Category";
import { CreateCategoryDTO } from "../../../../dtos/CreateCategoryDTO";
import { ICategoriesRepository } from "./ICategoriesRepository";

import { AppDataSource } from "../../../../database/data-source";
import { Repository } from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: CreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  async findByName(name: string): Promise<Category | null> {
    return await this.repository.findOneBy({ name });
  }

  async getAll(): Promise<Category[]> {
    return await this.repository.find();
  }
}
