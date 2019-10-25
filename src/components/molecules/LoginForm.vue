<template>
  <div>
    <text-input placeholder="ID" @change="onChangeId" />
    <text-input placeholder="Password" @change="onChangePassword" />
    <my-button @click="onSubmit">Login</my-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MyButton from '@/components/atoms/MyButton.vue';
import TextInput from '@/components/atoms/TextInput.vue';

export default Vue.extend({
  components: {
    MyButton,
    TextInput,
  },
  methods: {
    onChangeId(id) {
      this.id = id;
    },
    onChangePassword(password) {
      this.password = password;
    },
    onSubmit() {
      this.$emit('submit', {
        id: this.id,
        password: this.password,
      });
    },
  }
});
</script>
