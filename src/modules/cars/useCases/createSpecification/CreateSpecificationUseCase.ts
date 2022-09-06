import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Specification } from "../../entities/Specification";
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

  async execute({
    name,
    description,
  }: CreateSpecificationParams): Promise<Specification> {
    const specificationExists = await this.specificationRepository.findByName(
      name
    );

    if (specificationExists) throw new AppError("Specification already exists");

    const specification = await this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
