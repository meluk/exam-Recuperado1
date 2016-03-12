angular.module('ServiceMove', ['LocalStorageModule'])
  .factory("moveStorage", function(localStorageService) {
   var allMoveArrar= [];
   var nameKey = 'move';
	
   /*
    Storage busca la variable tareas en un localSotrage
    Si la encuentra la devuelve, sino un array vacio.
   */
   var Storage = function (namekey){
     if(localStorageService.get(nameKey)){
            return localStorageService.get(nameKey);  //cambio nombre array
        }else{
            return [];
        }
    };
    /*
    setNew recibe un arreglo y se los asigna a la variable
    tareas en el localSotrage
    */
	 var setNewMove = function (array){ //!!!!!!new move
      localStorageService.set(nameKey, array); //cambio nombre array
    };
    /*
    Recibe un arreglo y lo aigna al arreglo que se pasa entre
    controladores
    */
	var setArrayMove = function(array){
      allMoveArrar = array;
    };
	
    /*
    Retorna el arreglo que define setArray
    */
    var getMove = function(){
      return allMoveArrary; 
    };

   return {
     storage: Storage,
	 getMove: getMove,
	 setNewMove: setNewMove,
	 setArrayMove: setArrayMove,
    }
  }
);