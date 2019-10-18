<template>
  <div id="app">
    <sshOptions msg="127.0.0.1"/>
  </div>
</template>

<script>
import sshOptions from './components/sshOptions.vue'

export default {
  name: 'app',
  components: {
    sshOptions
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
