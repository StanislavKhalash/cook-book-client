/**
 * Created by Stanislav on 12/11/2016.
 */

app.controller('NavbarController', function ($scope, menu, screen) {
    $scope.showMenuButton = screen.isSmall;

    $scope.$watch(function () {
        return screen.isSmall();
    }, function (isScreenSmall) {
        $scope.showMenuButton = isScreenSmall;
    }, true);

    $scope.toggle = function () {
        menu.toggle();
    };
});