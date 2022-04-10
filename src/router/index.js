/*
 * @Author: Nxf
 * @Date: 2022-04-05 01:00:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-09 21:55:04
 * @Descripttion: 整个应用的路由器
 */

import Vue from 'vue';
//  --1.--导入路由对象
import VueRouter from 'vue-router';

//引入布局
import loginLot from '../layouts/login.vue';
import defaultLot from '../layouts/default.vue';

//引入组件
import Home from '../pages/home.vue';
import Invoice from '@/pages/invoice/index.vue';
import InvoiceList from '../pages/invoice/InvoiceList.vue';
import InvoiceDetail from '../pages/invoice/InvoiceDetail.vue';
import User from '../pages/User.vue';
//  --2.--注入VueRouter插件
Vue.use(VueRouter);

//路由1
const loginRoutes = [
    {
        path:'/userLogin',
        name:'yongHuDengLu',
        component:loginLot
    }
];
//路由2
const invoiceRoutes = [
    {
        path:'/',
        name:'root',
        component:defaultLot,
        redirect:'/home',
        children:[
            {
                path:'home',
                name:'home',
                component:Home
            },
            {
                path:'/invoiceList',
                component:Invoice,
                children:[
                    {
                        path:'',
                        // path:'invoiceList',
                        name:'invoiceList',
                        component:InvoiceList,
                        // children:[
                        //     {
                        //         path:'invoiceDetail',
                        //         name:'invoiceDetail',
                        //         component:InvoiceDetail
                        //     }
                        // ]
                    },
                    {
                        path:'invoiceDetail',
                        name:'invoiceDetail',
                        component:InvoiceDetail
                    }
                ]
            },
            {
                path:'user',
                name:'user',
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
})

export default router;