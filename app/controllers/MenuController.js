/**
 * Created by Stanislav on 12/11/2016.
 */

cookBookApp.controller('MenuController', ['$scope', '$location', function ($scope, $location) {
    $scope.selectItem = function (path) {
        $location.path(path);
    };
}]);