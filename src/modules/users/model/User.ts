import { v4 as uuid } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  email: string;
  admin: boolean;

  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuid();

    this.created_at = new Date();
    this.updated_at = new Date();

    this.admin = false;
  }
}

export { User };
