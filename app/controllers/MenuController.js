/**
 * Created by Stanislav on 12/11/2016.
 */

cookBookApp.controller('MenuController', ['$scope', '$window', function($scope, $window) {
    $scope.select = function(menuItem) {
        $window.alert(menuItem);
    };

    $window.alert('Hey');
}]);