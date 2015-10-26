neuronModule.controller('IncidentsController', ['$scope', 'neuronFactory', function (scope, neuronFactory){
    scope.dataChange = function(menu_id){
        alert(menu_id);
    }
}])