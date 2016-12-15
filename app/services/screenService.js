/**
 * Created by Stanislav on 12/11/2016.
 */

app.factory('screen', function ($rootScope, $window, $timeout) {
    var service = {};
    service.screenWidth = false;
    service.hasMobileWidth = function () {
        return (service.screenWidth <= 768);
    };

    var updateWidth = function () {
        $rootScope.$evalAsync(function() {
            service.screenWidth = $window.innerWidth;
        });
    };

    angular.element($window).bind('resize', function () {
        updateWidth();
    });

    $timeout(function () {
        updateWidth();
    }, 0);

    return service;
});
