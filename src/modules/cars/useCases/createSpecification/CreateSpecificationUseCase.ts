import { ISpecificationRepository } from '../../repositories/Specifications/ISpecificationRepository';

type CreateSpecificationParams = {
  name: string;
  description: string;
};

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: CreateSpecificationParams) {
    if (this.specificationRepository.findByName(name)) {
      throw new Error('Specification already exists');
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
