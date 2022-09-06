import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUserRepository } from "../../repositories/Users/IUserRepository";
import { AppError } from "../../../../errors/AppError";

type AuthenticateUserParams = {
  email: string;
  password: string;
};

type AuthenticateUserResponse = {
  user: {
    name: string;
    email: string;
  };
  token: string;
};

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateUserParams): Promise<AuthenticateUserResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError("Email or password incorrect!");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError("Email or password incorrect!");

    const token = sign({}, "835b24aee8219397593168a834a53548", {
      subject: user.id,
      expiresIn: 60 * 60 * 24, //24 horas em segundos
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
