/**
 * Created by Stanislav on 12/11/2016.
 */

app.factory('menu', function () {
    var service = {};
    var open = true;

    service.isOpen = function () {
        return open;
    };

    service.toggle = function () {
        open = !open;
    };

    return service;
});