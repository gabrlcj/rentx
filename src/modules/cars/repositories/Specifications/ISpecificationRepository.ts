import { CreateSpecificationDTO } from '../../../../dtos/CreateSpecificationDTO';
import { Specification } from '../../model/Specification';

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}
