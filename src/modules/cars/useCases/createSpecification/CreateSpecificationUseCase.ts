import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/Specifications/ISpecificationRepository";

type CreateSpecificationParams = {
  name: string;
  description: string;
};
@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: CreateSpecificationParams) {
    if (await this.specificationRepository.findByName(name)) {
      throw new Error("Specification already exists");
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
