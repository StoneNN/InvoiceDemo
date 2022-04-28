<!--
 * @Author: Nxf
 * @Date: 2022-04-11 20:28:06
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-18 14:51:58
 * @Descripttion: 
-->

<template>
  <div id="root">
      <!-- <span>999</span> -->
    <a-button type="primary">
      批量删除
    </a-button>
    
    <a-button type="primary">
      新建规则
    </a-button>
    <a-button type="primary">
      重置
    </a-button>
    
    <a-input-search
      placeholder="请输入规则编号"
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
        <a slot="rulesCode" slot-scope="text">{{text}}</a>
        <span slot="total" slot-scope="text">￥{{text}}</span>
        <template slot="action" slot-scope="text,record">
            <router-link 
                :to="{
                    path:'/financial/rulesList/rulesDetail',
                    query:{
                        rulesId:record.id
                    }
                }"
                @click.native="saveId(record.id)"
            >
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
  import jsonData from '@/assets/rulesData.json';

  Vue.use(Table).use(Icon).use(Divider).use(Button).use(Input);

    const columns = [
        {
            title: '规则编号',
            dataIndex:'rulesCode',
            key: 'rulesCode',
            align:'center',
            slots: { title: 'rulesCode' },
            scopedSlots: { customRender: 'rulesCode' },
        },
        {
            title: '订单编号',
            dataIndex:'orderCode',
            key: 'orderCode',
            align:'center',
        },
        {
            title: '商品名称',
            dataIndex:'goodsName',
            key: 'goodsName',
            align:'center',
            width:'15%'

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
            title: '操作',
            dataIndex:'action',
            key: 'action',
            align:'center',
            scopedSlots: {customRender:'action'},
            width:'15%'
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
                localStorage.setItem('rulesId',v);
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