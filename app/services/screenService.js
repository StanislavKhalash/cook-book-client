/**
 * Created by Stanislav on 12/11/2016.
 */

app.factory('screen', function ($window, $timeout) {
    var service = {};
    service.hasMobileWidth = false;

    var updateWidth = function() {
        var screenWidth = $window.innerWidth;
        service.hasMobileWidth = (screenWidth <= 768);
    };

    angular.element($window).on('resize', function () {
        updateWidth();
    });

    $timeout(function() {
        updateWidth();
    }, 0);

    return service;
});
