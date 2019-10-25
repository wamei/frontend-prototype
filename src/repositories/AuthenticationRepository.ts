import IAuthenticationRepository from "@/domain/repository/IAuthenticationRepository";
import Authentication from "@/domain/entity/Authentication";
import AuthenticationId from "@/domain/entity/AuthenticationId";
import UserId from "@/domain/entity/UserId";

export class AuthenticationRepository implements IAuthenticationRepository {
  findByEmailAndPassword(email: string, password: string) {
    if (email === "test1@example.com" && password === "test") {
      return new Authentication({
        id: new AuthenticationId("aaa"),
        userId: new UserId(1)
      });
    }
    if (email === "test2@example.com" && password === "test") {
      return new Authentication({
        id: new AuthenticationId("bbb"),
        userId: new UserId(2)
      });
    }
    throw new Error("not found");
  }

  findById(authenticationId: AuthenticationId) {
    if (authenticationId.toValue() === "aaa") {
      return new Authentication({
        id: new AuthenticationId("aaa"),
        userId: new UserId(1)
      });
    }
    if (authenticationId.toValue() === "bbb") {
      return new Authentication({
        id: new AuthenticationId("bbb"),
        userId: new UserId(2)
      });
    }
    throw new Error("not found");
  }

  findBySession() {
    let id = window.localStorage.getItem("session");
    if (id === null) {
      throw new Error("not found");
    }
    return this.findById(new AuthenticationId(id));
  }

  save(authentication: Authentication) {
    window.localStorage.setItem("session", authentication.id.toValue());
  }

  delete(authenticationId: AuthenticationId) {
    window.localStorage.removeItem("session");
  }
}

export default new AuthenticationRepository();
