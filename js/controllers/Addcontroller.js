angular.module('AddControllers', [])
  .controller('addCtrl', function ($scope , $rootScope, localStorageService, userStorage, moveStorage) {
    $scope.userArray = userStorage.storage();
	userStorage.setArray($scope.userArray);
	
	$scope.allMove = moveStorage.storage();
    moveStorage.setArrayMove($scope.allMove);
	
	$scope.accounts = 
	{   
		"value": "debito", 
		"values": ["debito", "credito"] 
	};
	
	$scope.currency = 
	{   
		"value": "colones", 
		"values": ["colones", "dolares"] 
	};
	

    $scope.addContact = function() {
      if($scope.ContactForm.$valid){
       $scope.userArray.push({
               name:$scope.nameContact,
               accountType:$scope.accounts.value,
		       currency:$scope.currency.value,
		       arrayMove:[],
		       balance: 0
            });
            $scope.nameContact = "";
		  
            userStorage.set($scope.userArray);
            userStorage.setArray($scope.userArray);
		    window.location.href = '#/list';//para que al dar enter la pagina se
		  
      }
    };
	

});



