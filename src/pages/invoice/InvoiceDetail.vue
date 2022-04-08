<!--
 * @Author: Nxf
 * @Date: 2022-04-05 01:58:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-09 02:25:41
 * @Descripttion: 
-->
<template>
  <div>
    <a-descriptions title="发票详情" bordered>
      <a-descriptions-item label="发票号码">
        {{ $route.query.invoiceInfo.id }}
      </a-descriptions-item>
      <a-descriptions-item label="发票代码">
        {{ $route.query.invoiceInfo.code }}
      </a-descriptions-item>
      <a-descriptions-item label="机器编码">
        {{ $route.query.invoiceInfo.machineId }}
      </a-descriptions-item>
      <a-descriptions-item label="开票日期">
        {{ $route.query.invoiceInfo.id }}
      </a-descriptions-item>
      <a-descriptions-item label="校验码" :span="2">
        {{ $route.query.invoiceInfo.checkCode }}
      </a-descriptions-item>
      <a-descriptions-item label="密码区" :span="3">
        {{ $route.query.invoiceInfo.passCode }}
      </a-descriptions-item>
      <a-descriptions-item label="购买方" :span="3" style="height: 'left '">
        <h3>名称:</h3>
        {{ $route.query.invoiceInfo.buyer }}
        <br />
        <h3>纳税人识别号:</h3>
        {{ $route.query.invoiceInfo.buyerId }}
        <br />
        <h3>地址:</h3>
        {{ $route.query.invoiceInfo.bAddress }}
        <br />
        <h3>电话:</h3>
        {{ $route.query.invoiceInfo.bPhone }}
        <br />
        <h3>开户行:</h3>
        {{ $route.query.invoiceInfo.bBank }}
        <br />
        <h3>开户行账号:</h3>
        {{ $route.query.invoiceInfo.bBankCode }}
        <br />
      </a-descriptions-item>
      <a-descriptions-item label="销售方" :span="3">
        <h3>名称:</h3>
        {{ $route.query.invoiceInfo.seller }}
        <br />
        <h3>纳税人识别号:</h3>
        {{ $route.query.invoiceInfo.sellerId }}
        <br />
        <h3>地址:</h3>
        {{ $route.query.invoiceInfo.sAddress }}
        <br />
        <h3>电话:</h3>
        {{ $route.query.invoiceInfo.sPhone }}
        <br />
        <h3>开户行:</h3>
        {{ $route.query.invoiceInfo.sBank }}
        <br />
        <h3>开户行账号:</h3>
        {{ $route.query.invoiceInfo.sBankCode }}
        <br />
      </a-descriptions-item>
      <a-descriptions-item label="价税合计">
        ￥{{ $route.query.invoiceInfo.total }}
      </a-descriptions-item>
      <a-descriptions-item label="大写">
        {{ $route.query.invoiceInfo.totalBig }}
      </a-descriptions-item>
    </a-descriptions>
    <h3>订单详情</h3>
    <a-table
        :columns="columns" 
        :data-source= "data"
        :row-key="record => record.id" 
        bordered
    >   
        <a slot="id" slot-scope="text">{{text}}</a>
    </a-table> 
  </div>
</template>

<script>
import Vue from "vue";
import { Table, Descriptions, Divider, Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Table).use(Descriptions).use(Divider).use(Button);
const columns = [
        
        {
            title: '服务ID',
            dataIndex:'id',
            key: 'serveId',
            align:'center',
            scopedSlots: { customRender: 'id' },
            // colSpan:0,
            // render:()=>{return {props:{colSpan:0}};}
        },
        {
            title: '货物或应税劳务、服务名称',
            dataIndex:'contentName',
            key: 'contentName',
            align:'center',
        },
        {
            title: '规格型号',
            dataIndex: 'style',
            key: 'style',
            align:'center',
        },
        {
            title: '单位',
            dataIndex: 'unit',
            key: 'unit',
            align:'center',
        },
        {
            title: '数量',
            dataIndex:'quantity',
            key: 'quantity',
            align:'center',
            scopedSlots:{ customRender: 'total' }
        },
        {
            title: '单价',
            dataIndex:'unitPrice',
            key: 'unitPrice',
            align:'center',
        },
        {
            title: '金额',
            dataIndex:'totalPrice',
            key: 'totalPrice',
            align:'center',
        },
        {
            title: '税率',
            dataIndex:'taxRate',
            key: 'taxRate',
            align:'center',
        },
        {
            title: '税额',
            dataIndex:'tax',
            key: 'tax',
            align:'center',
        },
    ];

export default {
  name: "InvoiceDetailCpnt",
  data() {
    return {
        columns,
        data:this.$route.query.invoiceInfo.content,
    };
  },
  mounted() {
    console.log("--- list传值 ---", this.$route.query.invoiceInfo);
  },
};
</script>
<style  lang='less' scoped>
    /deep/.ant-descriptions {
    margin: 40px 20px 0px 20px;
    }
    h3 {
    display: inline-block;
    }
    /deep/.ant-table {
        background-color: white;
        margin: 0px 20px
    }
</style>