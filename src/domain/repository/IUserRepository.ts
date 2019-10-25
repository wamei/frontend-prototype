import User from '@/domain/entity/User';
import UserId from '@/domain/entity/UserId';

export default interface IUserRepository {
  findById(userId: UserId): User;
  save(user: User): void;
}
