<!--
 * @Author: Nn
 * @Date: 2022-04-13 11:50:28
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-28 17:25:10
 * @Description: breadCrumb
-->


<template>
  <div class="bao">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        v-for="(item, index) of lists"
        :key="index"
        style="padding: 5px"
      >
        <router-link :to="item.path" style="font-size: 18px">{{
          item.meta.title
        }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        v-for="(item, index) of lists"
        :key="index"
        style="padding: 5px"
      >
        <router-link :to="item.path" style="font-size: 18px">{{
          item.path
        }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        v-for="(item, index) of lists"
        :key="index"
        style="padding: 5px"
      >
        <router-link :to="item.path" style="font-size: 18px">{{
          item.name
        }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Breadcrumb } from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Breadcrumb);
  
  export default {
    name:"BreadCrumbCpnt",
    data(){
      return{
        lists:[],
        breadCrumbNameMap:{

          '/home':'首页',

          '/order':'订单',
          '/order/orderList':'订单列表',
          '/order/orderList/orderDetail':'订单详情',


        }
      }
    },
    watch: {
      $route: "init",
    },
    mounted() {
      console.log(this.$route.matched);
    },
    methods: {
      init(to, from) {
        console.log('====== route ======',this.$route);
        console.log('====== route to ======',to.path);
        let matched = to.matched;
        // if (matched.length && matched[0].name !== "home") {
        //   matched = [
        //     { 
        //       path:'/home',
        //       name:'home',
        //       meta:{title:'首页'}
        //     },
        //     ...matched
        //   ];
        // }
        this.lists = matched;
        console.log('====== route lists ======',this.lists);
      },
    },
  };
</script>

<style scoped>
.bao {
  background-color: #fff;
  padding: 5px 0px;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  padding-left: 10px;
  border-radius: 10px;
}
</style>