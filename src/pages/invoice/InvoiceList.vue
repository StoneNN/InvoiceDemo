<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:39:14
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-09 17:34:40
 * @Descripttion: 
-->

<template>
  <div id="root">
    <a-button type="primary">
      批量删除
    </a-button>
    
    <a-button type="primary">
      新建比赛
    </a-button>
    <a-button type="primary">
      重置
    </a-button>
    
    <a-input-search
      placeholder="请输入发票号码"
      enter-button="搜索"
      size="default"
      style="width:40%;"
      @search="onSearch"
    />
    <a-table
        :columns="columns" 
        :data-source="data"
        :row-selection="rowSelection"
        :row-key="record => record.id" 
    >
        <!-- <template slot="id" slot-scope="text">
            <span >{{ text }}</span>
        </template> -->
        <a slot="id" slot-scope="text">{{text}}</a>
        <span slot="total" slot-scope="text">￥{{text}}</span>
        <template slot="action" slot-scope="text,record">
            <router-link 
                :to="{
                    path:'/invoiceList/invoiceDetail',
                    query:{
                        invoiceInfo:record
                    }
                }"
                @click.native="saveId(record.id)"
            >
            <!-- <router-link :to="{name:'invoiceDetail'}" > -->
            <!-- <router-link to="/invoiceList/invoiceDetail" > -->
                详情
            </router-link>
            <a-divider type="vertical" />
            <a @click.prevent = "deleteAlert(record.id)">删除</a>
        </template>
    </a-table>
  </div>
</template>
<script>
  import Vue from "vue";
  import { Table, Icon, Divider, Button, Input} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  import jsonData from '../../../public/data.json';

  Vue.use(Table).use(Icon).use(Divider).use(Button).use(Input);

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
            drawer:'刘梅',
            content:[
                {
                    id:'001',
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'一箱24盒',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    id:'002',
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'一箱12盒',
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
            drawer:'李娜',
            content:[
                {
                    id:'001',
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'一箱24盒',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    id:'002',
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'一箱12盒',
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
            drawer:'杨坤',
            content:[
                {
                    id:'001',
                    contentName:'蒙牛无菌枕纯牛奶',
                    style:'一箱24盒',
                    unit:'箱',
                    quantity:'200', 
                    unitPrice:'45',
                    totalPrice:'9000',
                    taxRate:'13%',
                    tax:'1170'
                },
                {
                    id:'002',
                    contentName:'蒙牛特仑苏纯牛奶',
                    style:'一箱12盒',
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

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };
    export default {
        name:"InvoiceListCpnt",
        data() {
            return {
                data:jsonData,
                columns,
                rowSelection,
            };
        },
        methods:{
            deleteAlert(id){
                if (confirm("确定删除吗？")) {
					console.log('-- 确定删除吗？ --',id);
					this.deleteOne(id);
				}
            },
            deleteOne(v){
                console.log('-- 删除 --',v);
            },
            saveId(v){
                console.log('-- saveId --',v);
                localStorage.setItem('invoiceId',v);
            },
            onSearch(value) {
                console.log(value);
            },
        },
        mounted(){
            console.log('接受list数据',jsonData);
        }

    }
</script>
<style lang='less' scoped>
    /deep/.ant-table {
        background-color: white;
        margin: 10px 20px
    }
    #root > .ant-btn {
        float: right;
        margin-right: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    #root > .ant-input-search {
        float: right;
        margin-right: 10px;
        margin-top: 10px;
    }
</style>