<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:23:43
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-05 15:46:27
 * @Descripttion: 
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Invoice/>
    <InvoiceDetail/>
    <User/> -->
    <router-view/>
  </div>
</template>

<script>

// import Invoice from './pages/Invoice.vue';
// import InvoiceDetail from './pages/InvoiceDetail.vue';
// import User from './pages/User.vue';

export default {
  name: 'App',
  components: {
    // Invoice,
    // InvoiceDetail,
    // User
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
  margin-top: 60px;
}
</style>
