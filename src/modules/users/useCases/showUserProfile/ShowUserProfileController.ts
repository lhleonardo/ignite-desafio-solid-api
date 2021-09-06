import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  private showUserProfileUseCase: ShowUserProfileUseCase;

  constructor(showUserProfileUseCase: ShowUserProfileUseCase) {
    this.showUserProfileUseCase = showUserProfileUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const profile = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(profile);
    } catch (err) {
      const error = err as Error;

      return response.status(404).json({ err: error.message });
    }
  }
}

export { ShowUserProfileController };
