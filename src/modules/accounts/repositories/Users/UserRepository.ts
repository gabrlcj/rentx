import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";

import { CreateUserDTO } from "../../../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driverLicense,
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      password,
      email,
      driverLicense,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOneBy({ email });
  }
}
