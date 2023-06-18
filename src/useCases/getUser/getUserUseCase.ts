import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { IGetUserRequestDTO } from './getUserDTO'

const userFromDto = ({ id, name  }: IGetUserRequestDTO): IGetUserRequestDTO => ({
    id,
    name
  });
export class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    const users = await this.usersRepository.get()

    return users.map(userFromDto)

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