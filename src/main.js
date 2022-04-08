/*
 * @Author: Nxf
 * @Date: 2022-04-05 00:23:43
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-08 17:15:44
 * @Descripttion: 
 */
import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 引入antd
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

// 应用插件
Vue.use(VueRouter);
// Vue.use(Antd);//全局引入影响性能，改为随用随取

new Vue({
  //挂载路由器
  router:router,
  render: h => h(App),
}).$mount('#app')
