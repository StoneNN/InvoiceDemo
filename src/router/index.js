/*
 * @Author: Nxf
 * @Date: 2022-04-05 01:00:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-29 00:46:50
 * @Descripttion: 整个应用的路由器
 */

import Vue from 'vue';
//  --1.--导入路由对象
import VueRouter from 'vue-router';

//引入布局
import loginLot from '../layouts/loginLot.vue';
import defaultLot from '../layouts/default.vue';

//引入组件
import Home from '../pages/home.vue';
import OrderList from '@/pages/bills/orders/orderList.vue';
import OrderDetail from '@/pages/bills/orders/orderDetail.vue';
import InvoiceList from '../pages/bills/invoices/InvoiceList.vue';
import InvoiceDetail from '../pages/bills/invoices/InvoiceDetail.vue';
import RulesList from '@/pages/bills/rules/rulesList.vue';
import RulesDetail from '@/pages/bills/rules/rulesDetail.vue';
import User from '../pages/user.vue';
import Login from '@/pages/login.vue';

//  --2.--注入VueRouter插件
Vue.use(VueRouter);

//路由1
const loginRoutes = [
    {
        path:'/userLogin',
        name:'yongHuDengLu',
        component:loginLot,
        redirect:'/userLogin',
        children:[
            {
                path:'',
                name:'userLogin',
                meta:{title:'用户登录'},
                component:Login
            }
        ]
    }
];
//路由2
const invoiceRoutes = [

    {
        path:'/',
        name:'home',
        component:defaultLot,
        redirect:'/home',
        children:[
            {
                path:'/home',
                name:'home',
                meta:{title:'首页'},
                component:Home
            },
            {
                path:'/financial',
                redirect:'financial/orderList'
            },
            {
                path:'financial/orderList',
                component:{render(c) { return c('router-view')  }},
                meta:{title:'订单'},
                redirect:'financial/orderList',
                children:[
                    {
                        path:'',
                        name:'orderList',
                        meta:{title:'订单列表'},
                        component:OrderList
                    },
                    {
                        path:'orderDetail',
                        name:'orderDetail',
                        meta:{title:'订单详情'},
                        component:OrderDetail
                    },
                ]
            },
            {
                path:'financial/rulesList',
                component:{render(c) { return c('router-view') }},
                meta:{title:'规则'},
                redirect:'financial/rulesList',
                children:[
                    {
                        path:'',
                        name:'rulesList',
                        meta:{title:'规则列表'},
                        component:RulesList,
                    },
                    {
                        path:'rulesDetail',
                        name:'rulesDetail',
                        meta:{title:'规则详情'},
                        component:RulesDetail
                    },
                ]
            },
            {
                path:'financial/invoiceList',
                component:{render(c) { return c('router-view') }},
                meta:{title:'发票列表'},
                redirect:'financial/invoiceList',
                children:[
                    {
                        path:'',
                        name:'invoiceList',
                        // meta:{title:'发票列表'},
                        component:InvoiceList,
                    },
                    {
                        path:'invoiceDetail',
                        name:'invoiceDetail',
                        meta:{title:'发票详情'},
                        component:InvoiceDetail
                    },
                ]
            },
            {
                path:'user',
                name:'user',
                meta:{title:'普通用户'},
                component:User
            },
        
        ]
    }
];

const allRoutes = [...loginRoutes, ...invoiceRoutes];

  
//  --3.-- 创建一个路由器实例 （机场）
const router = new VueRouter({
    //路由器工作模式（默认是 hash）
    mode:'hash',
    //  --4.-- 对路由实例设置 映射配置（航线）是一个对象
    routes:allRoutes
});

//全局前置路由守卫 ---- 初始化的时候被调用；每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log("beforeEach ---> to,from",to, from);
    next();
})

//全局后置路由守卫 ---- 初始化的时候被调用；每次路由切换之后被调用（没有 next 参数）
router.afterEach((to,from)=>{
    console.log("afterEach ---> to,from",to, from);
    if(to.meta.title){ 
        document.title = to.meta.title //修改网页的title
    }else{
        document.title = '智力竞技综合管理平台'
    }
})

export default router;