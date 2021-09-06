import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;

  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    const user_id = request.header("user-id");

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(users);
    } catch (err) {
      const error = err as Error;
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
