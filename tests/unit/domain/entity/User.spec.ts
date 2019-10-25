import { shallowMount } from "@vue/test-utils";
import User from "@/domain/entity/User";

describe("User Entity", () => {
  it("createNullUser", () => {
    const user = User.createNullUser();
    expect(user.id.toValue()).toBe(0);
    expect(user.name).toMatch("");
    expect(user.email).toMatch("");
    expect(user.password).toMatch("");
  });
  it("setName", () => {
    const newName = "test";
    const user = User.createNullUser();
    user.setName(newName);
    expect(user.name).toMatch(newName);
  });
});
