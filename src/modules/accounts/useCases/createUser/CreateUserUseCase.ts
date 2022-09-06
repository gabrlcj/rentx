import { inject, injectable } from "tsyringe";
import { CreateUserDTO } from "../../../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/Users/IUserRepository";
import { hash } from "bcrypt";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driverLicense,
  }: CreateUserDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) throw new Error("User already exists!");

    const passwordHash = await hash(password, 8);

    const newUser = await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driverLicense,
    });

    return newUser;
  }
}
