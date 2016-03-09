'use strict';
/**
 * @ngdoc overview
 * @name myappsApp
 * @description
 * # myappsApp
 *
 * Main module of the application.
 */
define(['config','ui-route'], function(config) {
  var app= angular.module('myappsApp', [
             'ui.router',
             'ionic'
         ]);
console.log(app)
//根据congif配置来生成路由对象
    app.provider('route', function() {
        this.$get = function() {
            return this;
        }
        this.route = function() {
            function getRoute(routeObj) {
                var returnObj;
                returnObj = routeObj;

                if (routeObj) {
                    if (routeObj.views) { // 路由中带views, key对应html中 ui-view名称
                        returnObj.views = routeObj.views;
                        if (routeObj.requireCtl) {
                            routeObj.resolve = {
                                "load": ['$q', '$rootScope', function($q, $rootScope) {
                                    return getResolve($q, $rootScope, routeObj['requireCtl']);
                                }]
                            }
                        }
                        for (var key in routeObj.views) {  //controller templateUrl
                            returnObj.views[key] = routeObj.views[key];
                            returnObj.views[key]["templateUrl"] = config.templatePre + routeObj.views[key]["templateUrl"] + ".html";

                        }
                    } else {  //不用加载 views
                        returnObj.templateUrl = config.templatePre + routeObj.templateUrl + ".html";
                        if (routeObj.requireCtl) {
                            returnObj.resolve = {
                                "load": ['$q', '$rootScope', function($q, $rootScope) {
                                    return getResolve($q, $rootScope, [routeObj.requireCtl]);
                                }]
                            }
                        }
                    }
                }

                function getResolve($q, $rootScope, requireCtl) {
                    //$q angularjs 的异步服务
                    //$1.defer()  获取延迟对象
                    //console.info(requireCtl);

                   // 可能存在多个controller情况下
                    for (var i = 0; i < requireCtl.length; i++) {
                        requireCtl[i] = config.controllerPre + requireCtl[i];
                    }
                    if (requireCtl) {
                        var defer = $q.defer();
                        require(requireCtl, function() {
                            defer.resolve()
                            $rootScope.$apply();
                        })
                        return defer.promise;
                    }

                }
                return returnObj;
            }
            return {
                getRoute: getRoute
            }
        }
    });
    //用于绑定各个节点的状态和状态的参数
    app.run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
          //  editableOptions.theme = 'bs3';

            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){

              /*      //监听路由改变，阻止页面跳转
                    if(toState.url != '/targetUrl' ){
                        if(sessionStorage.getItem("state") == '1'){
                            event.preventDefault();
                           // 此处提示信息
                        }
                    }
                    //验证是否登录
                    var User = sessionStorage.getItem("User");
                    if (!User) {
                        if (toState.url.indexOf("login") == -1) {
                            event.preventDefault();
                            $state.go("login");
                        }
                    }*/
                });
        }
    ]);
    //配置路由的各个节点
  app.config(["$stateProvider", "$urlRouterProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide", "routeProvider",
    function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, routeProvider ) {
           //  $httpProvider.interceptors.push('myHttpInterceptor');

            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            $urlRouterProvider.otherwise(config.defaultRedirect);
            var routers = routeProvider.route();
            var route = config.route;
            if (route instanceof Array) {
                angular.forEach(route, function(data, index, array) {
                    for (var routestate in data) {
                         $stateProvider.state(routestate, routers.getRoute(data[routestate]));
                    }
                });
            }
        }
    ]);
    return app;


});
