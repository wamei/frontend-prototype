import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import TextInput from "./TextInput.vue";

const stories = storiesOf("Input", module);

stories.add(
  "text input",
  () => ({
    components: { TextInput },
    template:
      '<text-input @change="action" :placeholder="placeholder"></text-input>',
    props: {
      placeholder: {
        default: text("placeholder", "input something")
      }
    },
    methods: {
      action: action("change")
    }
  }),
  { info: true }
);
