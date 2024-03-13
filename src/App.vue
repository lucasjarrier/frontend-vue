<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--light-blue-color);
  width: 100%;
  height: 100%;
  background-color: var(--light-color);
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
