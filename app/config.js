define(['router/route'], function(routerObj) {
	return {
		baseUrl: "../",
		templatePre: "../",
		controllerPre: "../",
		route: [routerObj],
		defaultRedirect: '/test',
		nodeUrlPre: "../",
		domain:"http://localhost:8080/school-war"
	}
})
