/**
 * Created by Stanislav on 12/11/2016.
 */

app.controller('NavbarController', function ($scope, menu, screen) {
    $scope.showMenuButton = screen.hasMobileWidth;

    screen.subscribe(function() {
        $scope.$apply(function() {
            $scope.showMenuButton = screen.hasMobileWidth;
        });
    });

    $scope.toggle = function () {
        menu.toggle();
    };
});