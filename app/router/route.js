define({
/*    'login': {
        url: "/login",
        requireCtl:[ "module_login/login.controller"],
        views: {
        	"view_center": {
                templateUrl: "module_login/login",
                controller: "LoginController"
            }
        }
    },
    'main': {
        url: "/main",
        requireCtl: ["module_top/head.controller"],
        views: {
            "view_top": {
	        	templateUrl: "module_top/head",
	            controller: "HeadCtrl"
            },
            "view_center": {
                templateUrl: "module_common/main"

            }
        }
    },*/
  'test': {
    url: "/test",
    requireCtl:[ "module_test/main.controller"],
    views: {
      "view_center": {
        templateUrl: "module_test/main",
        controller: "MainCtrl"
      }
    }
  },  'about': {
    url: "/about",
    requireCtl:[ "scripts/controllers/about"],
    views: {
    "about": {
      templateUrl: "views/about",
      controller: "AboutCtrl"
    }}

  },

})
