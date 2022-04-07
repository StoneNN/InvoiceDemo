<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:39:14
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-07 16:02:45
 * @Descripttion: 
-->

<template>
  <a-table
    :columns="columns" 
    :data-source="data"
    :row-key="record => record.id"
  >
    <span slot="invoiceId" slot-scope="text">{{ text }}</span>
  </a-table>
</template>
<script>
  import Vue from "vue";
  import { Table, Icon, Divider} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Table).use(Icon).use(Divider);

    const columns = [
        {
            title: '发票号码',
            dataIndex:'invoiceId',
            key: 'invoiceId',
            scopedSlots: { customRender: 'invoiceId' },
        },
        {
            title: '日期',
            dataIndex:'date',
            key: 'date',
        },
        {
            title: '销售方',
            dataIndex: 'seller',
            key: 'seller',
        },
        {
            title: '购买方',
            dataIndex: 'buyer',
            key: 'buyer',
        },
        {
            title: '总金额',
            dataIndex:'total',
            key: 'total',
        },
        {
            title: '操作',
            dataIndex:'action',
            key: 'action',
        },
    ];

    const data = [
        {
            id: '125379',
            date: '2022-05-09',
            seller: '中国李宁服饰有限公司',
            buyer: '张三',
            total: '99,043',
        },
        {
            id: '532957',
            date: '2021-11-22',
            seller: '石家庄网通科技有限公司',
            buyer: '王五',
            total: '4,359',
        },
        {
            id: '138479',
            date: '2022-01-23',
            seller: '河北交投股份有限公司',
            buyer: '李四',
            total: '99,043',
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