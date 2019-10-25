import IUserRepository from "@/domain/repository/IUserRepository";
import User from "@/domain/entity/User";
import UserId from "@/domain/entity/UserId";

export class UserRepository implements IUserRepository {
  findById(userId: UserId) {
    if (userId.toValue() === 1) {
      return new User({
        id: new UserId(1),
        name: "hoge",
        email: "test1@example.com",
        password: ""
      });
    }
    if (userId.toValue() === 2) {
      return new User({
        id: new UserId(2),
        name: "fuga",
        email: "test2@example.com",
        password: ""
      });
    }
    throw new Error("not found");
  }

  save(user: User) {}
}

export default new UserRepository();
