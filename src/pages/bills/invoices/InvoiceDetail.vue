<!--
 * @Author: Nxf
 * @Date: 2022-04-05 01:58:19
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-12 07:31:15
 * @Descripttion: InvoiceDetailCpnt
-->
<template>
  <div>
    <a-descriptions title="发票详情" bordered>
      <a-descriptions-item label="发票号码">
        {{ invoiceData.id }}
      </a-descriptions-item>
      <a-descriptions-item label="发票代码">
        {{ invoiceData.code }}
      </a-descriptions-item>
      <a-descriptions-item label="机器编码">
        {{ invoiceData.machineId }}
      </a-descriptions-item>
      <a-descriptions-item label="开票日期">
        {{ invoiceData.date }}
      </a-descriptions-item>
      <a-descriptions-item label="校验码" :span="2">
        {{ invoiceData.checkCode }}
      </a-descriptions-item>
      <a-descriptions-item label="密码区" :span="3">
        {{ invoiceData.passCode }}
      </a-descriptions-item>
      <a-descriptions-item label="购买方" :span="3">
        <h4>名称:</h4>
        {{ invoiceData.buyer }}
        <br />
        <h4>纳税人识别号:</h4>
        {{ invoiceData.buyerId }}
        <br />
        <h4>地址:</h4>
        {{ invoiceData.bAddress }}
        <br />
        <h4>电话:</h4>
        {{ invoiceData.bPhone }}
        <br />
        <h4>开户行:</h4>
        {{ invoiceData.bBank }}
        <br />
        <h4>开户行账号:</h4>
        {{ invoiceData.bBankCode }}
        <br />
      </a-descriptions-item>
      <a-descriptions-item label="销售方" :span="3">
        <h4>名称:</h4>
        {{ invoiceData.seller }}
        <br />
        <h4>纳税人识别号:</h4>
        {{ invoiceData.sellerId }}
        <br />
        <h4>地址:</h4>
        {{ invoiceData.sAddress }}
        <br />
        <h4>电话:</h4>
        {{ invoiceData.sPhone }}
        <br />
        <h4>开户行:</h4>
        {{ invoiceData.sBank }}
        <br />
        <h4>开户行账号:</h4>
        {{ invoiceData.sBankCode }}
        <br />
      </a-descriptions-item>
      <a-descriptions-item label="收款人">
        {{ invoiceData.payee }}
      </a-descriptions-item>
      <a-descriptions-item label="复核">
        {{ invoiceData.review }}
      </a-descriptions-item>
      <a-descriptions-item label="开票人">
        {{ invoiceData.drawer }}
      </a-descriptions-item>
      <a-descriptions-item label="价税合计">
        ￥{{ invoiceData.total }}
      </a-descriptions-item>
      <a-descriptions-item label="大写" >
        {{ invoiceData.totalBig }}
      </a-descriptions-item>
    </a-descriptions>
    <div style="margin-top:'60px; color:red; height:'60px'">订单详情</div>
    <a-table
        :columns="columns" 
        :data-source= "contentDatas"
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
// import axios from 'axios';
import "ant-design-vue/dist/antd.css";
import jsonData from '@/assets/invoiceData.json';


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
        contentDatas:[],
        invoiceData:{}
    };
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
        // axios.get('../../../public/invoiceData.json').then(
        //     response => {
        //       console.log('请求成功了',response.data)
        //     },
        //     error => {
        //       console.log('请求失败了',error.message)
        //     }
				// )
        console.log('-------=-===',jsonData);
        const  oneData = jsonData.filter((obj)=>{
          return obj.id == this.$route.query.invoiceId;
          // return obj.id == localStorage.getItem('invoiceId')
        });

        this.invoiceData = oneData[0];
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