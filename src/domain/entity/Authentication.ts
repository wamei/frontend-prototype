import Entity from './Entity';
import AuthenticationId from './AuthenticationId';
import UserId from './UserId';

export interface IAuthenticationArgs {
  id: AuthenticationId;
  userId: UserId;
}

export default class Authentication extends Entity<AuthenticationId> {
  userId: UserId;

  constructor(args: IAuthenticationArgs) {
    super(args.id);
    this.userId = args.userId;
  }
}

