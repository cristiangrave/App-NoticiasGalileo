import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: "22002686",
      password: "123",
      rol: "alumno",
    },
    {
      userId: 2,
      username: "22002687",
      password: "123",
      rol: "admin",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username); //user representa cada elemento dentro del array users
  }
}
