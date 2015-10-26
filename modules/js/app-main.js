var neuronModule = angular.module("neuron", ['ngRoute', 'ngAnimate', 'textAngular']);

neuronModule.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/notes', {
                    templateUrl: 'views/notes.html',
                    controller: 'NotesController'
                }).
                when('/main', {
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                }).
                when('/incidents', {
                    templateUrl: 'views/incidents.html',
                    controller: 'IncidentsController'
                }).
                otherwise({
                    redirectTo: '/main'
                });
        }]);


neuronModule.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });