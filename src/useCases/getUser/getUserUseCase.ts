import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";

export class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    const users = await this.usersRepository.get()

    return users

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: data.name,
    //     email: data.email,
    //   },
    //   from: {
    //     name: 'Equipe do Meu App',
    //     email: 'equipe@meuapp.com',
    //   },
    //   subject: 'Seja bem-vindo à plataforma',
    //   body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    // })
  }
}