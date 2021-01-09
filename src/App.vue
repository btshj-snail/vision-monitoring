<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <base-layout />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLayout from './layout/BaseLayout.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BaseLayout,
  },
});
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
