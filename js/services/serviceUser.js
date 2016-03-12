angular.module('ServiceUser', ['LocalStorageModule'])
  .factory("userStorage", function(localStorageService) {
   var userArray = []; //array de tareas
   var nameKey = 'counts';
   var key= 0;
	
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
    var setNew = function (array){ //!!!!!!buscando 
      localStorageService.set(nameKey, array); //cambio nombre array
    };
    /*
    Recibe un arreglo y lo aigna al arreglo que se pasa entre
    controladores
    */
    var setArray = function(array){
       userArray = array;
    };
	
    /*
    Retorna el arreglo que define setArray
    */
    var getArray = function(){
      return userArray; 
    };

   return {
     storage: Storage,
     set: setNew,
     setArray: setArray,
     getArray: getArray,
    }
  }
);

