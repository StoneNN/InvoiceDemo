<!--
 * @Author: Nxf
 * @Date: 2022-04-05 01:58:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-09 01:11:07
 * @Descripttion: 
-->
<template>
  <a-descriptions title="发票详情"  bordered>
    <a-descriptions-item label="发票号码"> {{$route.query.invoiceInfo.id}} </a-descriptions-item>
    <a-descriptions-item label="发票代码"> {{$route.query.invoiceInfo.code}} </a-descriptions-item>
    <a-descriptions-item label="机器编码"> {{$route.query.invoiceInfo.machineId}} </a-descriptions-item>
    <a-descriptions-item label="开票日期">
      {{$route.query.invoiceInfo.id}}
    </a-descriptions-item>
    <a-descriptions-item label="校验码" :span="2">
      {{$route.query.invoiceInfo.checkCode}}
    </a-descriptions-item>
    <a-descriptions-item label="密码区" :span="3">
        {{$route.query.invoiceInfo.passCode}}
    </a-descriptions-item>
    <a-descriptions-item label="购买方" :span="3" style="height:'left '">
      <h3>名称:</h3> {{$route.query.invoiceInfo.buyer}}
      <br />
      <h3>纳税人识别号:</h3>{{$route.query.invoiceInfo.buyerId}}
      <br />
      <h3>地址:</h3>{{$route.query.invoiceInfo.bAddress}}
      <br />
      <h3>电话:</h3>{{$route.query.invoiceInfo.bPhone}}
      <br />
      <h3>开户行:</h3> {{$route.query.invoiceInfo.bBank}}
      <br />
      <h3>开户行账号:</h3> {{$route.query.invoiceInfo.bBankCode}}
      <br />
    </a-descriptions-item>
    <a-descriptions-item label="销售方" :span="3">
      <h3>名称:</h3> {{$route.query.invoiceInfo.seller}}
      <br />
      <h3>纳税人识别号:</h3>{{$route.query.invoiceInfo.sellerId}}
      <br />
      <h3>地址:</h3>{{$route.query.invoiceInfo.sAddress}}
      <br />
      <h3>电话:</h3>{{$route.query.invoiceInfo.sPhone}}
      <br />
      <h3>开户行:</h3> {{$route.query.invoiceInfo.sBank}}
      <br />
      <h3>开户行账号:</h3> {{$route.query.invoiceInfo.sBankCode}}
      <br />
    </a-descriptions-item>
    <a-descriptions-item label="价税合计">
      ￥{{$route.query.invoiceInfo.total}}
    </a-descriptions-item>
    <a-descriptions-item label="大写"> {{$route.query.invoiceInfo.totalBig}} </a-descriptions-item>

    
  </a-descriptions>
</template>

<script>
  import Vue from "vue";
  import { Table, Descriptions, Divider, Button} from "ant-design-vue";
  import 'ant-design-vue/dist/antd.css';
  
  Vue.use(Table).use(Descriptions).use(Divider).use(Button);

export default {
  name: "InvoiceDetailCpnt",
  data() {
    return {};
  },
  mounted() {
    console.log("--- list传值 ---", this.$route.query.invoiceInfo);
  },
};
</script>
<style  lang='less' scoped>
  /deep/.ant-descriptions{
      margin: 40px 20px;
  }
  h3{
      display: inline-block;
  }
</style>