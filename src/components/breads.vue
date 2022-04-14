<!--
 * @Author: Nn
 * @Date: 2022-04-13 11:50:28
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-14 10:45:55
 * @Description: breadCrumb
-->


<template>
  <div class="bao">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        v-for="(item, index) of $route.matched"
        :key="index"
        style="padding: 5px"
      >
        <router-link :to="item.path" style="font-size: 18px">{{
          item.meta.title
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
    watch: {
      $route: "init",
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {
      init() {
        console.log('====== route ======',this.$route);
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