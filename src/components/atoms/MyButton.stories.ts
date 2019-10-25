import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import MyButton from "./MyButton.vue";

const stories = storiesOf("Button", module);

stories
  .add(
    "with text",
    () => ({
      components: { MyButton },
      template: '<my-button @click="action">{{text}}</my-button>',
      props: {
        text: {
          default: text("text", "Hello Button")
        }
      },
      methods: { action: action("clicked1") }
    }),
    { info: true }
  )
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked2") }
  }));
