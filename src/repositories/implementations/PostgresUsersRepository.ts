import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    // const user = this.users.find(user => user.email === email);
    
    const user = await prisma.user.findUnique({ where: { email }})

    return user;
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({data: user}) 
  }

  async get(): Promise<User[]> {
    return await prisma.user.findMany()
  }
  
}