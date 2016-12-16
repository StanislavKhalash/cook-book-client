/**
 * Created by Stanislav on 12/11/2016.
 */

app.factory('screen', function ($rootScope, $window) {
    var service = {};
    service.screenWidth = $window.innerWidth;
    service.isSmall = function () {
        return (service.screenWidth <= 768);
    };

    angular.element($window).bind('resize', function () {
        $rootScope.$evalAsync(function () {
            service.screenWidth = $window.innerWidth;
        });
    });

    return service;
});