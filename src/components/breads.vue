<!--
 * @Author: Nn
 * @Date: 2022-04-13 11:50:28
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-29 16:37:29
 * @Description: breadCrumb
-->


<template>
  <div class="mianBaoXie">

    <a-breadcrumb separator=">">
      <a-breadcrumb-item
        v-for="(item, index) of lists"
        :key="index"
        style="padding: 5px"
      >
        <router-link :to="item" style="font-size: 13px">{{
          breadCrumbNameMap[item]
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
    props:{
      currentPath:String
    },
    data(){
      return{
        lists:[],
        breadCrumbNameMap:{

          '/home':'首页',

          '/financial':'财务信息',
          '/financial/orderList':'订单列表',
          '/financial/orderList/orderDetail':'订单详情',
          '/financial/rulesList':'规则列表',
          '/financial/rulesList/rulesDetail':'规则详情',
          '/financial/invoiceList':'发票列表',
          '/financial/invoiceList/invoiceDetail':'发票详情',

        }
      }
    },
    watch: {
      $route: "init",
    },
    mounted() {
      console.log('----- currentPath -----',this.currentPath);
      console.log(this.$route.matched);
    },
    methods: {
      init(to, from) {
        console.log('====== route ======',this.$route);
        console.log('====== route to ======',to.path, from.path);
        //、、、

        const pathSnippets = to.path.split("/").filter(i => i);
        console.log("-----pathSnippets----", pathSnippets);

        var breads = pathSnippets.map((_, index) => {
          const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
          console.log("-----url----", url);
          return (
            url
          );
        });
        console.log('----breads--',breads);
        // 、、、
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
        this.lists = breads;
        console.log('====== route lists ======',this.lists);
      },
    },
  };
</script>

<style scoped>
  .mianBaoXie {
    background-color: white;
    padding: 5px 0px;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    padding-left: 10px;
    border-radius: 10px;
    text-align: left;
  }
</style>