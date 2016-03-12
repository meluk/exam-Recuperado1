angular.module('AddMoveControllers', [])
  .controller('addMoveCtrl', function ($scope , $routeParams, $rootScope, localStorageService, userStorage, moveStorage) {

	$scope.userArray = userStorage.storage();
	userStorage.setArray($scope.userArray);
	var key=0;
	
	$scope.typeMove = 
	{   
		"value": "credito", 
		"values": ["debito", "credito"] 
	};
	
	$scope.CurrentDate = new Date();
	
	/*
	 creo un nuevo array, lo actualizo con la vista y lo sustitullo el array de 
	 movimiento que este en el localStorage
	*/
	$scope.addMove = function() {
		var newArray = $scope.userArray[key].arrayMove;
		newArray.push({
			date:$scope.dateMove,
			amount:$scope.amountMove,
			detail:$scope.detailMove,
		    typeMove: $scope.typeMove.value,
		});
		  $scope.dateMove = "";
		  $scope.amountMove = "";
		  $scope.detailMove = "";
		$scope.typeMove.value= "",
		
		$scope.userArray[key].arrayMove = newArray;
		userStorage.set($scope.userArray);
		userStorage.setArray($scope.userArray);
		
		
	};
	/*
	 Actualiza el balance, por medio del pop(),
	 tomo el ultimo array y depediendo del tipo cambio el balance
	*/
	$scope.currentBalance = function(){
		var lastArray = $scope.userArray[key].arrayMove.pop();
		
		if(lastArray.typeMove == 'debito'){
			var balance = $scope.userArray[key].balance;
			total = balance - lastArray.amount;
		}else{
			var balance = $scope.userArray[key].balance;
			total = balance + lastArray.amount;
		};
		
	   $scope.userArray[key].balance = total;
		userStorage.set($scope.userArray);
		userStorage.setArray($scope.userArray);
		
	};
	

});



