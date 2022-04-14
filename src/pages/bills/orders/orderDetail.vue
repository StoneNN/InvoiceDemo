<!--
 * @Author: Nxf
 * @Date: 2022-04-05 01:58:19
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-14 10:44:15
 * @Descripttion: InvoiceDetailCpnt
-->
<template>
  <div>
    <a-descriptions title="订单详情" bordered :column='3'>
      <a-descriptions-item label="订单号" :span="3">
        {{ orderData.orderCode }}
      </a-descriptions-item>
      <a-descriptions-item label="商品名称" :span="3">
        {{ orderData.goodsName }}
      </a-descriptions-item>
      <a-descriptions-item label="商品规格">
        {{ orderData.standards }}
      </a-descriptions-item>
      <a-descriptions-item label="订单日期">
        {{ orderData.date }}
      </a-descriptions-item>
      <a-descriptions-item label="订单数量">
        {{ orderData.quantity }}
      </a-descriptions-item>
      <a-descriptions-item label="商品单价">
        {{ orderData.unitPrice }}
      </a-descriptions-item>
      <a-descriptions-item label="商品折扣" :span="2">
        {{ orderData.discount }}
      </a-descriptions-item>
      <a-descriptions-item label="商品总价">
        {{ orderData.total }}
      </a-descriptions-item>
      <a-descriptions-item label="总价大写" :span="2">
        {{ orderData.totalBig }}
      </a-descriptions-item>
      <a-descriptions-item label="购买方" :span="3">
        <h4>名称:</h4>
        {{ orderData.buyer }}
        <br />
        <h4>纳税人识别号:</h4>
        {{ orderData.buyerId }}
        <br />
        <h4>地址:</h4>
        {{ orderData.bAddress }}
        <br />
        <h4>电话:</h4>
        {{ orderData.bPhone }}
        <br />
      </a-descriptions-item>
      <a-descriptions-item label="销售方" :span="3">
        <h4>名称:</h4>
        {{ orderData.seller }}
        <br />
        <h4>纳税人识别号:</h4>
        {{ orderData.sellerId }}
        <br />
        <h4>地址:</h4>
        {{ orderData.sAddress }}
        <br />
        <h4>电话:</h4>
        {{ orderData.sPhone }}
        <br />
      </a-descriptions-item>
    </a-descriptions>

  </div>
</template>

<script>
import Vue from "vue";
import { Table, Descriptions, Divider, Button } from "ant-design-vue";
// import axios from 'axios';
import "ant-design-vue/dist/antd.css";
import jsonData from '@/assets/ordersData.json';


Vue.use(Table).use(Descriptions).use(Divider).use(Button);



export default {
  name: "InvoiceDetailCpnt",
  data() {
    return {
        orderData:{}
    };
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){

        const  oneData = jsonData.filter((obj)=>{

          return obj.id == this.$route.query.orderId;
        });
        console.log('-------=-===',oneData[0]);

        this.orderData = oneData[0];
        this.contentDatas = oneData[0].content;
    }
  }
};
</script>
<style  lang='less' scoped>
    /deep/.ant-descriptions {
    margin: 40px 20px 0px 20px;
    }
    /deep/.ant-table {
        background-color: white;
        margin: 0px 20px;
    }
    /deep/.ant-descriptions-item-content {
      padding: 5px 0px 2px 10px;
      text-align: left;
      h4{
        display: inline-block;
        font-weight: bolder;
        // background-color: red;
      }
    }
    /deep/.ant-descriptions-item-label{
      // background-color: cyan;
      padding: 5px;
      font-size: 15px;
      font-weight: bolder;
    }
</style>