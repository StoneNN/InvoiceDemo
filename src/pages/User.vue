<!--
 * @Author: Nxf
 * @Date: 2022-04-05 00:39:58
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-12 03:23:06
 * @Descripttion: 
-->
<!--
<template>
  <table class="list-table">
    <thead>
      <tr class="table-title">
        <th class="tac" :colspan="alarms_models.length + 1">终端报警数量</th>
      </tr>
      <tr class="table-title">
        <th class="tac">类型</th>
        <th class="tac" v-for="(item, i) in models" :key="i">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-content">
        <td>安装数量</td>
        <td v-for="(item, i) in models_all" :key="i">{{ item }}</td>
      </tr>
      <tr class="table-content">
        <td>当前离线</td>
        <td v-for="(item, i) in models_offline" :key="i">{{ item }}</td>
      </tr>
      <tr class="table-content">
        <td>数据异常</td>
        <td v-for="(item, i) in models_datafault" :key="i">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>
-->
<script>
export default {
  name: "UserCpnt",
  data() {
    return {
      // 报警统计
      alarms_camera: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      alarms_hfct: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      alarms_ir: [0, 0, 0, 5, 0, 0, 0, 0, 0],
      alarms_models: [
        "T3000",
        "SU10",
        "T2000",
        "M1000",
        "SH10",
        "ST10",
        "D10",
        "SA10",
        "SU20",
      ],
      alarms_sound: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      alarms_uhf: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  },
};
</script>
<style lang="less" scoped>
.list-table {
  width: 100%;
  margin: 10px 0;
  .table-title {
    border: none;
    color: #7fddf6;
    font-size: 17px;
    background-color: #126791;
    .tac {
      position: relative;
      padding: 9px 15px;
      height: 20px;
      line-height: 20px;
      font-weight: normal;
    }
  }
  .table-content {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    td {
      text-align:center;
      border:none;
      color: #bec3cb;
      padding: 10px 10px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }
  }
}
</style>