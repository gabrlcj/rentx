import { CreateUserDTO } from "../../../../dtos/CreateUserDTO";
import { User } from "../../entities/User";

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
