import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { CreateSpecificationDTO } from "../../../../dtos/CreateSpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async findByName(name: string): Promise<Specification | null> {
    return this.repository.findOneBy({ name });
  }

  async create({
    name,
    description,
  }: CreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }
}
