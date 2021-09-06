import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    const createdUser = this.createUserUseCase.execute({ name, email });

    return response.status(200).json(createdUser);
  }
}

export { CreateUserController };
