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
    id,
    name,
    password,
    email,
    driverLicense,
    avatar,
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      driverLicense,
      avatar,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOneBy({ email });
  }

  async findById(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }
}
