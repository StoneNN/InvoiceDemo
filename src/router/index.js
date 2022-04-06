/*
 * @Author: Nxf
 * @Date: 2022-04-05 01:00:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-06 00:05:32
 * @Descripttion: 整个应用的路由器
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

//引入布局
import loginLot from '../layouts/login.vue';
import defaultLot from '../layouts/default.vue';

//引入组件
import Invoice from '../pages/Invoice.vue';
import InvoiceDetail from '../pages/InvoiceDetail.vue';
import User from '../pages/User.vue';

Vue.use(VueRouter);

//登录路由
const loginRoutes = [
    {
        name:'yongHuDengLu',
        path:'/userlogin',
        component:loginLot
    }
];
const invoiceRoutes = [
    {
        name:'faPiaoLieBiao',
        path:'/invoice',
        component:Invoice,
        children:[
            {
                name:'faPiaoXiangQing',
                path:'invoiceDeatil',
                component:InvoiceDetail
            }
        ]
    },
];

const allRoutes = [...loginRoutes, ...invoiceRoutes];

const createRouter = () => {
    const routers = [...allRoutes]
    return new VueRouter({
      scrollBehavior: () => ({ y: 0 }),
      routes: routers
    })
  }
  
//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'faPiaoLieBiao',
            path:'/invoice',
            component:Invoice,
            children:[
                {
                    name:'faPiaoXiangQing',
                    path:'invoiceDeatil',
                    component:InvoiceDetail
                }
            ]
        },
        {
            name:'yongHu',
            path:'/user',
            component:User
        }
    ]
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