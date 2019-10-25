import Entity from './Entity';
import UserId from './UserId';

export interface IUserArgs {
  id: UserId;
  name: string;
  email: string;
  password: string;
}

export default class User extends Entity<UserId> {
  name: string;
  email: string;
  password: string;

  constructor(args: IUserArgs) {
    super(args.id);
    this.name = args.name;
    this.email = args.email;
    this.password = args.password;
  }

  setName(name: string) {
    this.name = name;
  }

  static createNullUser() {
    return new User({
      id: new UserId(0),
      name: '',
      email: '',
      password: '',
    });
  }
}
