/**
 * Created by Stanislav on 12/11/2016.
 */

app.controller('NavbarController', function ($scope, menu, screen) {
    $scope.showMenuButton = screen.hasMobileWidth;

    $scope.$watch(
        function () {
            return screen.hasMobileWidth;
        },
        function (value) {
            $scope.showMenuButton = value;
        }, true
    );

    $scope.toggle = function () {
        menu.toggle();
    };
});