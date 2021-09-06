import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  private turnUserAdminUseCase: TurnUserAdminUseCase;

  constructor(turnUserAdminUseCase: TurnUserAdminUseCase) {
    this.turnUserAdminUseCase = turnUserAdminUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    const admin = this.turnUserAdminUseCase.execute({ user_id });

    return response.status(200).json(admin);
  }
}

export { TurnUserAdminController };
