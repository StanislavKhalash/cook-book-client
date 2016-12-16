'use strict';

describe('factory: Screen', function () {
    var createScreen = function (window) {
        module(function ($provide) {
            $provide.value('$window', window);
        });

        var screen = {};
        inject(function (_screen_) {
            screen = _screen_;
        });

        return screen;
    };

    var createWindow = function (innerWidth) {
        var window = {};
        window.innerWidth = innerWidth;
        window.addEventListener = jasmine.createSpy('addEventListener');

        return window;
    };

    var triggerResize = function (element) {
        angular.element(element).triggerHandler('resize');
    };

    beforeEach(function () {
        module('cookBookApp');
    });

    it('should be small if initial window width is less than 768', function () {
        var window = createWindow(256);
        var screen = createScreen(window);
        expect(screen.isSmall()).toBe(true);
    });

    it('should be small if initial window width is equal to 768', function () {
        var window = createWindow(768);
        var screen = createScreen(window);
        expect(screen.isSmall()).toBe(true);
    });

    it('should not be small if initial window width is greater than 768', function () {
        var window = createWindow(1024);
        var screen = createScreen(window);
        expect(screen.isSmall()).toBe(false);
    });
});
