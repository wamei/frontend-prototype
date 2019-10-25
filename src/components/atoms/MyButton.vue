<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
});
</script>

<style scoped lang="scss">
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
}
</style>
