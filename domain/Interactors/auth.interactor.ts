import { ErrorGenerate } from '../abstracts';
import {
  LoginEntitie,
  RegistrationEntitie,
  UserEntitie,
} from '../entities/auth';
import { AuthRepozitry } from '../repozitory/auth.repozitory';

export class AuthInteractor {
  constructor(
    private readonly authRepozitry: AuthRepozitry,
    private readonly errorGenerates: ErrorGenerate
  ) {}
  public async login(
    login: LoginEntitie
  ): Promise<UserEntitie | ErrorGenerate> {
    const user = await this.authRepozitry.findOneByNickname(login.nickname);
    if (user?.password === login.password) return user;
    return this.errorGenerates;
  }
  public registration(registration: RegistrationEntitie) {
    console.log(registration);
  }
}
