import Authentication from '../entity/Authentication';
import AuthenticationId from '../entity/AuthenticationId';

export default interface IAuthenticationRepository {
  findByEmailAndPassword(email: string, password: string): Authentication;
  findById(authenticationId: AuthenticationId): Authentication;
  save(authentication: Authentication): void;
  delete(authenticationId: AuthenticationId): void;
}
