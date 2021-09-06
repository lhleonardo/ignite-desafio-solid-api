import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const profile = this.usersRepository.findById(user_id);

    if (!profile) {
      throw new Error("User not exists");
    }

    return profile;
  }
}

export { ShowUserProfileUseCase };
