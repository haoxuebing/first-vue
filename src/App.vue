<template>
  <div id="app"> <!-- <img src="./assets/logo.png"> -->
 
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Mint from 'mint-ui';

Vue.use(Mint);
export default {
  name: 'app',
  components:{Mint}
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
