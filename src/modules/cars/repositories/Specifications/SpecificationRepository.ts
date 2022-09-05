import { CreateSpecificationDTO } from "../../../../dtos/CreateSpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: CreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification {
    const specificationIndex = this.specifications.findIndex(
      (specification) => specification.name === name
    );

    if (specificationIndex > -1) {
      throw new Error("Specification already exists!");
    }

    const specification = this.specifications[specificationIndex];

    return specification;
  }
}
