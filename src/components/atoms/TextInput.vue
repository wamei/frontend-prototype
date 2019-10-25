<template>
  <input type="text" v-model="text" :placeholder="placeholder" @input="onChange" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      text: '',
    };
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
    },
  },
  mounted() {
    this.text = this.value;
  },
  methods: {
    onChange() {
      this.$emit("change", this.text);
    }
  }
});
</script>

<style scoped lang="scss">
input {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  font-size: 15pt;
  padding: 3px 10px;
}
</style>
