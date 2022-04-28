<!--
 * @Author: Nxf
 * @Date: 2022-04-05 18:42:09
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-28 17:12:29
 * @Descripttion: Default Layout
-->


<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <!-- 页头 -->
      <a-layout-header>
        <span>智力竞技综合管理系统</span>
        <a-dropdown>
          <a class="ant-dropdown-link">
            你好，用户001
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>用户信息</a>
            </a-menu-item>
            <a-menu-item>
              <a>退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>  
      </a-layout-header>
      <a-layout>
        <!-- 选择菜单 -->
        <a-layout-sider>
          <a-menu
            :inlineIndent="inlineIndent"
            :defaultSelectedKeys="[$route.path]"
            :openKeys="openKeys"
            mode="inline"
            :inline-collapsed="collapsed"
            @openChange="onOpenChange"
            @click="menuClick"
          >
            <!-- 菜单遍历的开始 -->
            <template v-for="item in menuList">
              <!-- 如果当前遍历项没有children，视为子菜单项，注意所有的key都是path用于路由跳转，以及当前选中记录 -->
              <a-menu-item v-if="!item.children" :key="item.path">
                <a-icon :type="item.icon" />
                <span>{{ item.title }}</span>
              </a-menu-item>
              <!-- 否则视为子菜单，传入菜单信息并且运用下面定义的函数式组件 -->
              <sub-menu v-else :key="item.path" :menu-info="item" />
            </template>
          </a-menu>
        </a-layout-sider>
        <!-- 内容区 -->
        <a-layout-content>
          <bread-crumb-router> </bread-crumb-router>
          <router-view ></router-view>
        </a-layout-content>
      </a-layout>
      <!-- 页脚 -->
      <a-layout-footer>北京欧德慧通信息技术有限公司</a-layout-footer>
    </a-layout>
  </div>
  </template>

<script>
  import Vue from "vue";
  import { Layout, Table, Icon, Menu, Dropdown} from "ant-design-vue";
  import breadCrumbRouter from "../components/breads.vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Layout).use(Table).use(Icon).use(Menu).use(Dropdown);
  Vue.use(breadCrumbRouter);
  
// 定义函数式组件
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        
        <span slot="title">
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>

        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <a-icon :type="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
        
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true 此项必须被定义
  // isSubMenu: true,
  props: {
    // 解构a-sub-menu的属性，也就是文章开头提到的为什么使用函数式组件
    ...Menu.SubMenu.props,
    // 接收父级传递过来的菜单信息
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default {
  name:"defaultLayoutCpnt",
  // 注册局部组件
  components:{
    breadCrumbRouter,
    'sub-menu': SubMenu,
  },
  data() {
    return {
      // 菜单缩进
      inlineIndent:12,
      // 默认不折叠
      collapsed: false,
      // 全部顶级父节点,用来控制所有父级菜单只展开其中的一项，可用遍历菜单信息进行赋值
      rootSubmenuKeys: ['/infomationManage','/safeInfoManage','/qualityInfoManage'],
      // 展开的父菜单项
      openKeys: [], 
      // 选中的子菜单项
      defaultSelectedKeys: [this.$route.path], 
      // 菜单信息，可从后台获取
      menuList: [
        {
          key: '首页',
          title: '首页',
          path: '/home',
          icon:'home'
        },
        {
          key: '财务信息',
          title: '财务信息',
          path: '',
          icon:'account-book',
          children: [
            {
              key: '订单',
              title: '订单',
              path: '/order/orderList',
              icon:'-',
            },
            {
              key: '规则',
              title: '规则',
              path: '/rulesList',
              icon:'-',
            },
            {
              key: '发票',
              title: '发票',
              path: '/invoiceList',
              icon:'-',
            },
          ],
        },
        {
          key: '4',
          title: '用户信息',
          icon:'team',
          children:[
              {
                  key: '5',
                  title: '用户',
                  icon:'-',
                  children: [
                    { 
                      key: '6',
                      title: '普通用户',
                      path: '/user',
                      icon:'-',
                    },
                    {
                        key: '7',
                        title: 'VIP用户',
                        path: '/home',
                        icon:'-',
                    }
                  ],
              }
          ]
        }
      ],
    }
  },
  created(){
    // 将从缓存中取出openKeys
    const openKeys = window.sessionStorage.getItem('openKeys')
    if(openKeys){
      // 存在即赋值
      this.openKeys = JSON.parse(openKeys)
    }
  },
  methods: {
    // 点击菜单，路由跳转,注意的是当点击MenuItem才会触发此函数
    menuClick({ item, key, keyPath }) {
      console.log(item,keyPath);
      // 获取到当前的key,并且跳转[.catch()-->防止重复点击同一个menu报错]
      this.$router.push({
        path: key
      }).catch(err=>err);
    },
    onOpenChange(openKeys) {
      // 将当前打开的父级菜单存入缓存中
      window.sessionStorage.setItem('openKeys', JSON.stringify(openKeys))
      //  控制只打开一个
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
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
    background: #007acc;;
    color: #fff;
    padding: 0;
  }
  #components-layout-demo-basic .ant-layout-header {
    height: 15vh;
    line-height: 15vh;
    position: relative;
  }
  #components-layout-demo-basic .ant-layout-header span {
      font-size: 50px;
      font-weight: bolder;
  }
  #components-layout-demo-basic .ant-layout-footer {
    height: 10vh;
    line-height: 10vh;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: white;
    color: #fff;
    height: 75vh;
  }
  #components-layout-demo-basic .ant-layout-content {
    background: white;
    color: #fff;
    padding: 10px;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
  .ant-dropdown-link {
    height: 70px;
    position:absolute;
    right: 10px;
    bottom: 10px;
    color: white;
  }
</style>
