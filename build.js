/**
 * 压缩配置
 * bower.json 中使用编译的
 */

({
  baseUrl: "app/",   //目标目录
    dir: "dist/",    //生成目录
  optimize: "uglify", // 压缩方式
  optimizeCss: "standard", //standard.keepLines
  //mainConfigFile: "../js/main.js",
  removeCombined: true,  //替换文件
  fileExclusionRegExp: /^\./,
  //modules: [{
  //  name: 'config'
  //},{
  //  name: 'main',
  //  exclude: ["config"]
  //}]
  modules: [
    {
      name: "main"
    }
  ]

})
