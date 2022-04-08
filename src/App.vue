<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:23:43
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-08 15:41:32
 * @Descripttion: 
-->
<template>
  <div id="app">

    <!-- <router-view :key="$route.fullPath" /> -->
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: gray;
    height: 100%;
  }
</style>
