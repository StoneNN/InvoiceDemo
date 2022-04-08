/*
 * @Author: Nn
 * @Date: 2022-04-06 11:28:54
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-08 09:58:12
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true, //加入内容
  lintOnSave: false
})
