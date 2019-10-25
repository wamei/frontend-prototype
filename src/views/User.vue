<template>
  <div>
    <p>name: {{user.name}}</p>
    <p>email: {{user.email}}</p>
    <text-input :value="nameData" placeholder="name" @change="onChangeName"></text-input>
    <my-button @click="changeName">Change Name</my-button>
    <my-button @click="logout">Logout</my-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/components/atoms/MyButton.vue';
import TextInput from '@/components/atoms/TextInput.vue';

export default Vue.extend({
  components: {
    MyButton,
    TextInput,
  },
  data() {
    return {
      nameData: this.$store.state.user.my.name,
    };
  },
  computed: {
    user: {
      get() {
        const user = this.$store.state.user.my;
        return {
          name: user.name,
          email: user.email,
        }
      }
    },
  },
  methods: {
    onChangeName(name) {
      this.nameData = name;
    },
    async changeName() {
      await this.$store.dispatch('user/changeName', this.nameData);
    },
    async logout() {
      await this.$store.dispatch('context/logout');
      this.$router.push({ name: 'home' });
    },
  },
});
</script>
