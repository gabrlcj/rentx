import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/Users/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driverLicense,
  }: CreateUserDTO): Promise<User> {
    const newUser = await this.userRepository.create({
      name,
      username,
      password,
      email,
      driverLicense,
    });

    return newUser;
  }
}
