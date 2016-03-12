angular.module('DetailControllers', ['LocalStorageModule'])
	.controller('detailCtrl', function ($scope , $routeParams, $rootScope, userStorage, localStorageService, moveStorage) {

    /*
	CONTROL PARA BORRAR y EDITAR DE DETALLES 
	por medio del $routeParams.itemId, elijo el array que quiero modificar
	*/
	
	$scope.userArray = userStorage.storage(); 
    userStorage.setArray($scope.userArray);
	$scope.allMove = $scope.userArray[0].arrayMove;
    $scope.whichItem = $routeParams.itemId; 
    var key = $scope.whichItem;
	
	 $scope.newArray = {
         value: new Date($scope.allMove[key].date),
		 amount: $scope.allMove[key].amount,
		 detail: $scope.allMove[key].detail,
		 type: $scope.allMove[key].detail
       };
    
	
	$scope.editar = function(){ 

		$scope.dateMove = $scope.newArray.value;
		var newValue = {
            date:$scope.newArray.value,
			amount: $scope.newArray.amount,
			detail:$scope.newArray.detail,
            };

		$scope.allMove[key] = newValue;
		$scope.userArray[0].arrayMove = $scope.allMove;
		
		userStorage.set($scope.userArray);
		userStorage.setArray($scope.userArray);
	
	};
		
	$scope.deleteDetails = function(key){ 
		$scope.allMove.splice(key,1); //borro o edito
			
		$scope.userArray[0].arrayMove = $scope.allMove;
		
		userStorage.set($scope.userArray);
		userStorage.setArray($scope.userArray);
			
		window.location.href = '#/' + "list";
	};
	
	
    
})