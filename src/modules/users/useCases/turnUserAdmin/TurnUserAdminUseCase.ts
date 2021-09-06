import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const userToPromoted = this.usersRepository.findById(user_id);

    if (!userToPromoted) {
      throw new Error("Invalid user_id provided");
    }

    return this.usersRepository.turnAdmin(userToPromoted);
  }
}

export { TurnUserAdminUseCase };
