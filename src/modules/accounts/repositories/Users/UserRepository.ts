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
    username,
    password,
    email,
    driverLicense,
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driverLicense,
    });

    await this.repository.save(user);

    return user;
  }
}
