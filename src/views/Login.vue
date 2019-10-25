<template>
  <div>
    <h1>This is an login page</h1>
    <login-form @submit="login"></login-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import LoginForm, { ISubmitArgs } from '@/components/molecules/LoginForm.vue';

export default Vue.extend({
  components: {
    LoginForm,
  },
  data() {
    return {
      id: '',
      password: '',
    };
  },
  methods: {
    login({ id, password }: ISubmitArgs) {
      this.$store.dispatch('context/login', {
        id: id,
        password: password,
      })
          .then(() => {
            this.$router.push({ name: 'user' });
          })
          .catch((error) => {
            alert(error.message);
          });
    },
  }
});
</script>
