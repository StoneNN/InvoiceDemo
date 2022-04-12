<!--
 * @Author: Nxf
 * @Date: 2022-04-11 20:28:18
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-12 07:40:24
 * @Descripttion: 
-->

<template>
  <a-descriptions title="规则详情" bordered :column="2">
    <a-descriptions-item label="规则编号" :span="2">
      {{ rulesData.rulesCode}}
    </a-descriptions-item>
    <a-descriptions-item label="订单编号"  :span="2">
      {{ rulesData.orderCode }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方">
      {{ rulesData.seller }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方">
      {{ rulesData.buyer }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方商品名称">
      {{ rulesData.goodsName }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方商品名称">
      {{ rulesData.bGoodsName }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方商品规格">
      {{ rulesData.standards }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方商品规格">
      {{ rulesData.bStandards }}
    </a-descriptions-item> 
    <a-descriptions-item label="销售方单位">
      {{ rulesData.unit }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方单位">
      {{ rulesData.bUnit }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方折扣">
      {{ rulesData.discount }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方折扣">
      ￥{{ rulesData.bDiscount }}
    </a-descriptions-item>
        <a-descriptions-item label="销售方票扣">
      {{ rulesData.piaokou }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方票扣">
      {{ rulesData.bPiaokou }}
    </a-descriptions-item> 
    <a-descriptions-item label="销售方赠品行惯例">
      {{ rulesData.zenPinhang }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方赠品行要求">
      {{ rulesData.bZenPinhang }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方备注行惯例">
      {{ rulesData.beizhulan }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方备注行要求">
      ￥{{ rulesData.bBeizhulan }}
    </a-descriptions-item>
    <a-descriptions-item label="销售方行项目资金" >
      {{ rulesData.hangxiangmuzijin }}
    </a-descriptions-item>
    <a-descriptions-item label="购买方行项目资金" >
      {{ rulesData.bHangxiangmuzijin }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
import Vue from "vue";
import { Table, Descriptions, Divider, Button } from "ant-design-vue";
// import axios from 'axios';
import "ant-design-vue/dist/antd.css";
import jsonData from '@/assets/rulesData.json';


Vue.use(Table).use(Descriptions).use(Divider).use(Button);


export default {
  name: "InvoiceDetailCpnt",
  data() {
    return {
        rulesData:{}
    };
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){

        console.log('-------=-===',jsonData);
        const  oneData = jsonData.filter((obj)=>{

          return obj.id == this.$route.query.rulesId;
        });

        this.rulesData = oneData[0];
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