import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/Users/UserRepository";

type UpdateUserAvatarParams = {
  userId: string;
  avatarFile: string;
};

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) {}

  async execute({ userId, avatarFile }: UpdateUserAvatarParams): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (user) {
      user.avatar = avatarFile;
      await this.userRepository.create(user);
    }
  }
}
