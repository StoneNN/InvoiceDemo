<!--
 * @Author: Nxf
 * @Date: 2022-04-05 18:38:32
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-29 00:56:28
 * @Descripttion: Login Layout
-->
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <span>Header</span>
      </a-layout-header>
      <a-layout-content>
          <router-view/>
      </a-layout-content>
      <a-layout-footer>
        Footer
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
  height: 100vh;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-header {
  height: 130px;
  line-height: 130px;
  padding: 0;
}
#components-layout-demo-basic .ant-layout-header span {
  font-size: 50px;
  font-weight: bolder;
}
#components-layout-demo-basic .ant-layout-footer {
  height: 100px;
  line-height: 10vh;
  padding: 0px;
}

#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  height: 75vh;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
