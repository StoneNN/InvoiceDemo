/*
 * @Author: Nxf
 * @Date: 2022-04-05 00:23:43
 * @LastEditors: Nxf
 * @LastEditTime: 2022-04-07 00:46:02
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
          style: "less" 
        }
    ]
  ]
}
