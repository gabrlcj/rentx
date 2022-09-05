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
    const specificationExists = await this.specificationRepository.findByName(
      name
    );

    if (specificationExists) {
      throw new Error("Specification already exists");
    }

    const specification = await this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
