import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
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
      if (user.avatar) {
        await deleteFile(`./tmp/avatar/${user.avatar}`);
      }

      user.avatar = avatarFile;

      await this.userRepository.create(user);
    }
  }
}
