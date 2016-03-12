var App = angular.module('AppContacts', ['LocalStorageModule', 'AddMoveControllers', 'ListController','AddControllers', 'DetailControllers', 'ServiceUser', 'ServiceMove', 'ngRoute']);
App.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'templates/list.html',
		controller: 'listCtrl'
	}).
	when('/detalles/:itemId', { ///:itemId
		templateUrl: 'templates/details.html',
		controller: 'detailCtrl'
	}).
	when('/', {
		templateUrl: 'templates/add.html',
		controller: 'addCtrl'
	}).
	when('/addMove', {
		templateUrl: 'templates/addMove.html',
		controller: 'addMoveCtrl'
	}).
	otherwise({
		redirectTo :'/list'
	});
}]);








