import { UserEntitie } from '../entities/auth';

export interface AuthRepozitry {
  findOneByEmail(id: number): UserEntitie;
  findOneByNickname(nickname: string): UserEntitie;
  findAll(): Array<UserEntitie>;
  // registrationUser();
}
