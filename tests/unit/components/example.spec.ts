import { shallowMount } from "@vue/test-utils";
import MyButton from "@/components/atoms/MyButton.vue";

describe("MyButton.vue", () => {
  it("renders slot when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(MyButton, {
      slots: {
        default: msg,
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
