angular.module('ListController', ['LocalStorageModule'])
  .controller('listCtrl', function ($scope, $rootScope, $routeParams, localStorageService, userStorage, moveStorage) {
	/*llamo al servicio para mostrar los datos
	solo muestra el primer usuario creado 
	*/
    $scope.userArray = userStorage.storage(); 
    userStorage.setArray($scope.userArray);
	var array = $scope.userArray[0]
	$scope.allMove = array.arrayMove;

});