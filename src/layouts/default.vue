<!--
 * @Author: Nxf
 * @Date: 2022-04-05 18:42:09
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-07 17:35:04
 * @Descripttion: Default Layout
 11111
 1`1111
 222222
 333333

-->


<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%">
    <a-layout-sider theme="light" v-model="collapsed" :trigger="null" collapsible>
      <div >
          <a-menu
            :inlineIndent="inlineIndent"
            :defaultSelectedKeys="[$route.path]"
            :openKeys="openKeys"
            mode="inline"
            :inline-collapsed="collapsed"
            @openChange="onOpenChange"
            @click="menuClick">
            <!-- 菜单遍历的开始 -->
            <template v-for="item in list">
              <!-- 如果当前遍历项没有children，视为子菜单项，注意所有的key都是path用于路由跳转，以及当前选中记录 -->
              <a-menu-item v-if="!item.children" :key="item.path">
                <i :class="item.icon" />
                <span>{{ item.title }}</span>
              </a-menu-item>
              <!-- 否则视为子菜单，传入菜单信息并且运用下面定义的函数式组件 -->
              <sub-menu v-else :key="item.path" :menu-info="item" />
            </template>
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import Vue from "vue";
  import { Layout, Table, Icon, Menu} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Layout).use(Table).use(Icon).use(Menu);
  
// 定义函数式组件
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <i :class="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <i :class="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true 此项必须被定义
  isSubMenu: true,
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
      list: [
        {
          key: '1',
          title: '项目信息管理',
          path: '/infomationManage',
          icon:'iconfont icon-information'
        },
        {
          key: '2',
          title: '安全信息管理',
          path: '/safeInfoManage',
          icon:'iconfont icon-anquan',
          children: [
            {
              key: '2.1',
              title: '安全风险管理',
              path: '/safeRisk',
              icon:'',
              children: [
                { 
                  key: '2.1.1',
                  title: '风险分类管理',
                  path: '/riskClassifyManage',
                  icon:'',
                },
                {
                    key: '2.1.2',
                    title: '分类辨识',
                    path: '/classifyIdentity',
                    icon:'',
                }
              ],
            },
          ],
        },
        {
          key: '3',
          title: '质量信息管理',
          path: '/qualityInfoManage',
          icon:'iconfont icon-zhiliang',
          children:[
              {
                  key: '3.1',
                  title: '质量控制点管理',
                  path: '/controlPointManage',
                  icon:'',
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
      // 获取到当前的key,并且跳转
      this.$router.push({
        path: key
      })
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
  // 注册局部组件
  components: {
    'sub-menu': SubMenu,
  },
};
</script>
<style>
</style>
