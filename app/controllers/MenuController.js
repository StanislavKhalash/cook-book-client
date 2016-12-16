/**
 * Created by Stanislav on 12/11/2016.
 */

app.controller('MenuController', function ($scope, $location, menu, screen) {
    $scope.items = [
        {
            routePath: '/dashboard',
            title: 'Dashboard',
            icon: 'tachometer'
        },

        {
            routePath: '/foods',
            title: 'Foods',
            icon: 'shopping-basket'
        },

        {
            routePath: '/recipes',
            title: 'Recipes',
            icon: 'cutlery'
        }
    ];

    $scope.selectedItem = null;

    var updateSelectedItem = function () {
        var url = $location.url();
        $scope.selectedItem = $scope.items.find(function (item) {
            return item.routePath === url;
        });
    };

    $scope.$on('$locationChangeStart', updateSelectedItem);

    $scope.navigateTo = function (item) {
        $location.path(item.routePath);
    };

    $scope.isMenuOpen = function () {
        return menu.isOpen();
    };

    $scope.$watch(function () {
        return screen.isSmall();
    }, function (isScreenSmall) {
        if (!isScreenSmall && !menu.isOpen()) {
            menu.open();
        }
    }, true);

    updateSelectedItem();
});