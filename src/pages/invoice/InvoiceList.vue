<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:39:14
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-08 17:52:40
 * @Descripttion: 
-->

<template>
    <a-table
        :columns="columns" 
        :data-source="data"
        :row-key="record => record.id" 
    >
        <!-- <template slot="id" slot-scope="text">
            <span >{{ text }}</span>
        </template> -->
        <a slot="id" slot-scope="text">{{text}}</a>
        <span slot="total" slot-scope="text">￥{{text}}</span>
        <template slot="action" slot-scope=" record">
            
            <!-- <router-link 
                :to="{
                    path:'/invoiceList/invoiceDetail',
                    query:{
                        invoiceInfo:record
                    }
                }"
            > -->
            <!-- <router-link :to="{name:'invoiceDetail'}" > -->
            <!-- <router-link :to="{name:'invoiceDetail'}" > -->
            <router-link to="/invoiceList/invoiceDetail" >
                详情
            </router-link>
            <a-divider type="vertical" />
            <a>删除</a>
        </template>
    </a-table>
</template>
<script>
  import Vue from "vue";
  import { Table, Icon, Divider, Button} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Table).use(Icon).use(Divider).use(Button);

    const columns = [
        {
            title: '发票号码',
            dataIndex:'id',
            key: 'invoiceId',
            align:'center',
            slots: { title: 'invoiceId' },
            scopedSlots: { customRender: 'id' },
        },
        {
            title: '日期',
            dataIndex:'date',
            key: 'date',
            align:'center',
        },
        {
            title: '销售方',
            dataIndex: 'seller',
            key: 'seller',
            align:'center',
        },
        {
            title: '购买方',
            dataIndex: 'buyer',
            key: 'buyer',
            align:'center',
        },
        {
            title: '总金额',
            dataIndex:'total',
            key: 'total',
            align:'center',
            scopedSlots:{ customRender: 'total' }
        },
        {
            title: '操作',
            dataIndex:'action',
            key: 'action',
            align:'center',
            scopedSlots: {customRender:'action'},
            width:'15%'
        },
    ];

    const data = [
        {
            id: '125379',
            machineId: '1794126',
            code:'011002100111',
            date: '2022-05-09',
            checkCode:'56183 92206 00401 10881',
            passCode:'-20/679*69--/>6565464616546+603-*<4613++516-20/679*69--/>6565464616546+603-*<4613++516',
            seller: '中国李宁服饰有限公司',
            sellerId: '16546531654968146861353',
            sAddress:'北京市朝阳区广安大街110号',
            sPhone:'17331604100',
            sBank:'中国银行北京海淀区支行',
            sBankCode:'1102359645877456123589',
            buyer: '张三',
            buyerId: '134566531654968146861353',
            bAddress:'河北省石家庄市裕华区中山路69号',
            bPhone:'17331604100',
            bBank:'中国银行北京海淀区支行',
            bBankCode:'1102359645877456123589',
            
            total: '99,043',
            totalBig:'玖万玖仟零肆拾叁',
            payee:'赵六',
            review:'王玖',
            frawer:'刘梅',
            content:[
                {
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'100', 
                    unitPrice:'65',
                    totalPrice:'6500',
                    taxRate:'13%',
                    tax:'845'
                }
            ],
            marks:'送到指定地点，到货前提前打电话联系。'
        },
        {
            id: '532957',
            machineId: '6594126',
            code:'011002100111',
            date: '2021-11-22',
            checkCode:'56183 92206 00401 10881',
            passCode:'-20/679*69--/>6565464616546+603-*<4613++516-20/679*69--/>6565464616546+603-*<4613++516',
            seller: '石家庄网通科技有限公司',
            sellerId: '16546531654968146861353',
            sAddress:'北京市朝阳区广安大街110号',
            sPhone:'17331604100',
            sBank:'中国银行北京海淀区支行',
            sBankCode:'1102359645877456123589',
            buyer: '王五',
            buyerId: '23315531654968146861353',
            bAddress:'河北省石家庄市裕华区中山路69号',
            bPhone:'17331604100',
            bBank:'中国银行北京海淀区支行',
            bBankCode:'1102359645877456123589',
            total: '4,359',
            totalBig:'肆仟叁佰伍拾玖',
            payee:'孙强',
            review:'王九河',
            frawer:'李娜',
            content:[
                {
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'100', 
                    unitPrice:'65',
                    totalPrice:'6500',
                    taxRate:'13%',
                    tax:'845'
                }
            ],
            marks:'送到指定地点，到货前提前打电话联系。'
        },
        {
            id: '538479',
            machineId: '3814126',
            code:'011002100111',
            date: '2022-01-23',
            checkCode:'56183 92206 00401 10881',
            passCode:'-20/679*69--/>6565464616546+603-*<4613++516-20/679*69--/>6565464616546+603-*<4613++516',
            seller: '河北交投股份有限公司',
            sellerId: '16546531654968146861353',
            sAddress:'北京市朝阳区广安大街110号',
            sPhone:'17331604100',
            sBank:'中国银行北京海淀区支行',
            sBankCode:'1102359645877456123589',
            buyer: '李四',
            buyerId: '16546531654968146861353',
            bAddress:'河北省石家庄市裕华区中山路69号',
            bPhone:'17331604100',
            bBank:'中国银行北京海淀区支行',
            bBankCode:'1102359645877456123589',
            total: '365019',
            totalBig:'叁拾陆万伍仟零壹拾玖',
            payee:'陈峰峰',
            review:'杨过',
            frawer:'杨坤',
            content:[
                {
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'',
                    unit:'箱',
                    quantity:'100', 
                    unitPrice:'65',
                    totalPrice:'6500',
                    taxRate:'13%',
                    tax:'845'
                }
            ],
            marks:'送到指定地点，到货前提前打电话联系。'
        },
    ];

    export default {
        name:"InvoiceListCpnt",
        data() {
            return {
                data,
                columns,
            };
        },
    }
</script>
<style lang='less' scoped>
    /deep/.ant-table {
        background-color: white;
        margin: 10px 20px
    }
</style>