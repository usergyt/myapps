'use strict';

/**
 * @ngdoc overview
 * @name myappsApp
 * @description
 * # myappsApp
 *
 * Main module of the application.
 */
angular
  .module('myappsApp1', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
   .constant("domain", "http://localhost:8080/skynet-personnel-war") //后台url
   /* .run(                //  设置路由事件的监听器以及过滤未经授权的请求
        [
            '$rootScope',
            '$state',
            '$stateParams',
            'editableOptions',
            'domain',
            'i18nService',
            function($rootScope, $state, $stateParams,
                     editableOptions, domain, i18nService) {
                // 设置ui-grid 国际化为中文
                i18nService.setCurrentLang('zh-cn');
                editableOptions.theme = 'bs3'; // bootstrap3 theme.
                // Can be also
                // 'bs2', 'default'
                var excludeRouter = ["login", "customerServer"];
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope
                    .$on(
                        '$stateChangeStart',
                        function(event, toState, toParams,
                                 fromState, fromParams) {
                            if (!User) {
                                if (excludeRouter) {
                                    var isToLogin = true;
                                    for (var i = 0; i < excludeRouter.length; i++) {
                                        if (toState.url
                                                .indexOf(excludeRouter[i]) != -1) {
                                            isToLogin = false;
                                            break;
                                        }
                                    }
                                    if (isToLogin) {
                                        event
                                            .preventDefault();
                                        $state.go("login");
                                    }
                                }

                            }
                        })
            }
        ])*/
    .controller('mainCtrl', ['$scope', function($scope) {

    }])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
       $urlRouterProvider.otherwise('/main');
      $stateProvider
           .state('/main', {
              url: "/main",
              templateUrl: "views/main.html",
              controller:  'MainCtrl'
           })
          .state('/about', {
              url: "/about",
              templateUrl: "views/about.html",
              controller:  'AboutCtrl'
          })


  });
