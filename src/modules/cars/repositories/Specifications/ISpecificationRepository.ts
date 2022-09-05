import { CreateSpecificationDTO } from "../../../../dtos/CreateSpecificationDTO";
import { Specification } from "../../entities/Specification";

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}
