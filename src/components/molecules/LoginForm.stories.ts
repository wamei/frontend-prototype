import { storiesOf } from "@storybook/vue";
import { text } from '@storybook/addon-knobs';
import { action } from "@storybook/addon-actions";

import LoginForm from "./LoginForm.vue";

const stories = storiesOf('Molecules', module);

stories
  .add("login form", () => ({
    components: { LoginForm },
    template: '<login-form @submit="action"></login-form>',
    methods: {
      action: action('submit')
    }
  }), { info: true });
