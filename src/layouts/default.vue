<!--
 * @Author: Nxf
 * @Date: 2022-04-05 18:42:09
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-06 17:22:29
 * @Descripttion: Default Layout
-->

<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!-- 页头 -->
      <a-layout-header>智力竞技比赛平台</a-layout-header>
      <a-layout>
        <!-- 选择菜单 -->
        <a-layout-sider>
          <a-menu
            style="width: 100%"
            :default-selected-keys="['1']"
            :open-keys.sync="openKeys"
            mode="inline"
            @click="handleClick"
          >
            <a-menu-item key="1">
              <a-icon type="home" />
              <span>首  页</span>
            </a-menu-item>
            <a-sub-menu key="sub1" @titleClick="titleClick">
              <span slot="title"><a-icon type="account-book" /><span>财务信息</span></span>
              <a-menu-item-group key="g1">
                <a-menu-item key="10">
                  发票
                </a-menu-item>
                <a-menu-item key="2">
                  Option 2
                </a-menu-item>
              </a-menu-item-group>
              
            </a-sub-menu>
            <a-sub-menu key="sub2" @titleClick="titleClick">
              <span slot="title"><a-icon type="appstore" /><span>比赛信息</span></span>
              <a-menu-item key="5">
                Option 5
              </a-menu-item>
              <a-menu-item key="6">
                Option 6
              </a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="7">
                  Option 7
                </a-menu-item>
                <a-menu-item key="8">
                  Option 8
                </a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <span slot="title"><a-icon type="setting" /><span>选手信息</span></span>
              <a-menu-item key="9">
                Option 9
              </a-menu-item>
              <a-menu-item key="10">
                Option 10
              </a-menu-item>
              <a-menu-item key="11">
                Option 11
              </a-menu-item>
              <a-menu-item key="12">
                Option 12
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <!-- 内容区 -->
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
      <!-- 页脚 -->
      <a-layout-footer>北京欧德慧通信息技术有限公司</a-layout-footer>
    </a-layout>
  </div>
</template>



<script>
  import Vue from "vue";
  import { Layout, Icon, Menu} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Layout).use(Icon).use(Menu);
  
  export default {
    name:"defaultLayout",
    data() {
      return {
        // collapsed: false,
        current: ['mail'],
        openKeys: ['1'],
      };
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
    methods: {
      handleClick(e) {
        console.log('click', e);
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    },
  };
</script>  



<style scoped>
  #components-layout-demo-basic {
    text-align: center;
    height: 100%;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    padding: 0;
  }
  #components-layout-demo-basic .ant-layout-header {
    height: 15vh;
    line-height: 15vh;
    font-size: 50px;
    font-weight: bolder;
  }
  #components-layout-demo-basic .ant-layout-footer {
    height: 10vh;
    line-height: 10vh;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    height: 75vh;
  }
  #components-layout-demo-basic .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
</style>
