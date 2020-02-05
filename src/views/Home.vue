<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ msg }}</p>
    <p>{{ target }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    let target = "none";
    if (IS_WEB_APP) {
      target = "web";
    }
    if (IS_WINDOWS_APP) {
      target = "windows";
    }
    if (IS_IOS_APP) {
      target = "ios";
    }
    if (IS_ANDROID_APP) {
      target = "android";
    }
    return {
      msg: NODE_ENV,
      target: target
    };
  }
});
</script>
