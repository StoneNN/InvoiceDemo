/*
 * @Author: Nxf
 * @Date: 2022-04-05 00:23:43
 * @LastEditors: Nn
 * @LastEditTime: 2022-04-06 15:00:11
 * @Descripttion: 
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
       "import",
        { 
          libraryName: "ant-design-vue", 
          libraryDirectory: "es", 
          style: "css" 
        }
    ]
  ]
}
