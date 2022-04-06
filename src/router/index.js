/*
 * @Author: Nxf
 * @Date: 2022-04-05 01:00:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-06 22:02:46
 * @Descripttion: 整个应用的路由器
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

//引入布局
import loginLot from '../layouts/login.vue';
import defaultLot from '../layouts/default.vue';

//引入组件
import Home from '../pages/home.vue';
import InvoiceList from '../pages/invoice/InvoiceList.vue';
import InvoiceDetail from '../pages/invoice/InvoiceDetail.vue';
// import User from '../pages/User.vue';

Vue.use(VueRouter);

//登录路由
const loginRoutes = [
    {
        path:'/userLogin',
        name:'yongHuDengLu',
        component:loginLot
    }
];
const invoiceRoutes = [
    {
        path:'/',
        name:'home',
        component:defaultLot,
        redirect:'/home',
        children:[
            {
                path:'home',
                name:'home',
                component:Home
               
            }
        ]
    },
    {
        path:'/invoiceList',
        name:'invoiceList',
        component:defaultLot,
        redirect:'/invoiceList',
        children:[
            {
                path:'invoiceList',
                name:'invoiceList',
                component:InvoiceList,
                children:[
                    {
                        path:'invoiceDetail',
                        name:'invoiceDetail',
                        component:InvoiceDetail
                    }
                ]
            }
        ]
    }
];

const allRoutes = [...loginRoutes, ...invoiceRoutes];

// const createRouter = () => {
//     const routers = [...allRoutes]
//     return new VueRouter({
//       scrollBehavior: () => ({ y: 0 }),
//       routes: routers
//     })
//   }
  
//创建一个路由器
const router = new VueRouter({
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