/**
 * Created by gyt on 2016/1/16.
 */
'use strict';

require(['config'], function(config) {
    //配置baseUrl
    // var baseUrl = document.getElementById('main').getAttribute('data-baseurl');
    var baseUrl="../";
    require.config({
    /*
     * 文件依赖
     */

        baseUrl: baseUrl,           //依赖相对路径
        paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
          "angular": "/bower_components/angular/angular.min",
          "ui-route": "/bower_components/angular-ui-router/release/angular-ui-router",
          "jquery": "/bower_components/jquery/dist/jquery.min",
          "bootstrap":"/bower_components/bootstrap/dist/js/bootstrap.min",
          "ionic":"ionic/js/ionic.bundle.min"
         },
        shim: {     //引入没有使用requirejs模块写法的类库。例如underscore这个类库，本来会有一个全局变量'_'。这里shim等于快速定义一个模块，把原来的全局变量'_'封装在局部，并导出为一个exports，变成跟普通requirejs模块一样
          /*  underscore: {
                exports: '_'
            },
             'angular-route': {
                deps: ['angular'],   //依赖什么模块 ,deps 先加载
                exports: 'ngRouteModule'
            }*/
            angular: {
                exports: 'angular'
            },
            'ui-route': {
              deps: ['angular'],
                exports: "uiroute"
            },
            'ionic':{
              exports: 'angular'
            },
            'bootstrap':['jquery']

        }
    });



    require(['angular', 'ui-route','app','ionic'], function(angular,uirouter,app,ionic){
         angular.bootstrap(document, [app.name]);  //手动启动应用
    });

})
