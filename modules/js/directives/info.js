neuronModule.directive('info', function () {
    return {
        restrict:'E',
        scope: { 
            infoList : '=',
            newInfo : '=',
            delInitiate : '=',
            selectedInfo :'=',
            onInfoSelect :'=',
            searchText :'=',
            onNew : '=',
            onSave : '=',
            onDelete : '=',
            refineSwitch : '='
        },
        templateUrl: 'views/directives/info.html'
    };
});


