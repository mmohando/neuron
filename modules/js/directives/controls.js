neuronModule.directive('mayIHelpYou', function () {
    return {
        restrict:'E',
        scope: { value : '=' },
        template:  '<div class="input-control full-size modern text iconic">' +
                        '<input type="text" ng-model=value>' +
                        '<span class="label">I am Listening  <span class="mif-spinner5 mif-ani-spin"></span></span>' +
                        '<span class="informer">Enter some text to search.</span>' +
                        '<span class="icon mif-search"></span>' +
                    '</div>'
    };
});

neuronModule.directive('mayIHelpYouWhite', function () {
    return {
        restrict:'E',
        scope: { value : '=' },
        template:  '<div class="input-control full-size modern text iconic">' +
                        '<input type="text" ng-model=value class=fg-white>' +
                        '<span class="label fg-white">I am Listening  <span class="mif-spinner5 mif-ani-spin"></span></span>' +
                        '<span class="informer fg-white">Enter some text to search.</span>' +
                        '<span class="icon mif-search fg-white"></span>' +
                    '</div>'
    };
});

neuronModule.directive('appBarCtrlData', function () {
    return {
        restrict:'E',
        scope: { 
                title : '@',
                menus : '@',
                menuIds : '@',
                action : '='
               },
        template:  '<div class="app-bar darcula">' +
                        '<a class="app-bar-element" href="#/main"><span class="icon mif-home"></span> Home</a>' +
                        '<span class="app-bar-divider"></span>' +
                        '<ul class="app-bar-menu">' +
                            '<li><a href=""><h3>{{title}}</h3></a></li>' +
                            '<li ng-repeat="option in menuOptions track by $index">' +
                                '<a ng-click="action(menuActions[$index])">{{option}}</a>' +
                            '</li>' +
                        '</ul>' +
                    '</div>',
        link:function(scope, element, attrs){
                    if (!attrs.menus) { attrs.menus = '[]'; }
                    if (!attrs.menuIds) { attrs.menuIds = '[]'; }
                    if (!attrs.groups) { attrs.groups = '[]'; }
                    if (!attrs.groupIds) { attrs.groupIds = '[]'; }
                    scope.menuOptions=JSON.parse(attrs.menus);
                    scope.menuActions=JSON.parse(attrs.menuIds);
                }
    };
});


