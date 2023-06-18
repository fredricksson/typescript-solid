import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { GetUserUseCase } from "./getUserUseCase";
import { GetUserController } from "./getUserController";

const postgresUsersRepository = new PostgresUsersRepository()

const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository
)

const getUserController = new GetUserController(
  getUserUseCase
)

export { getUserUseCase, getUserController }