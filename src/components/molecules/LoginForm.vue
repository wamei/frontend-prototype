<template>
  <div>
    <text-input placeholder="ID" @change="onChangeId" />
    <text-input placeholder="Password" @change="onChangePassword" />
    <my-button @click="onSubmit">Login</my-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MyButton from "@/components/atoms/MyButton.vue";
import TextInput from "@/components/atoms/TextInput.vue";

export interface ISubmitArgs {
  id: string;
  password: string;
}

export default Vue.extend({
  components: {
    MyButton,
    TextInput
  },
  data() {
    return {
      id: "",
      password: ""
    };
  },
  methods: {
    onChangeId(id: string) {
      this.id = id;
    },
    onChangePassword(password: string) {
      this.password = password;
    },
    onSubmit() {
      const args: ISubmitArgs = {
        id: this.id,
        password: this.password
      };
      this.$emit("submit", args);
    }
  }
});
</script>
