'use strict';

describe('factory: Screen', function () {
    var $rootScope;

    var createScreen = function (window) {
        module(function ($provide) {
            $provide.value('$window', window);
        });

        var screen = {};
        inject(function (_screen_, _$rootScope_) {
            screen = _screen_;
            $rootScope = _$rootScope_;
        });

        return screen;
    };

    var createWindow = function (innerWidth) {
        var window = {};
        var listeners = {};

        window.innerWidth = innerWidth;
        window.addEventListener = function(type, listener) {
            listeners[type] = listener;
        };
        window.triggerEvent = function(type) {
            var listener = listeners[type];
            listener(new Event(type), type);
        };

        return window;
    };

    var resizeWindow = function (window, newWidth) {
        window.innerWidth = newWidth;
        window.triggerEvent('resize');
        $rootScope.$digest();
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

    it('should react on window scale up', function() {
        var window = createWindow(256);
        var screen = createScreen(window);
        resizeWindow(window, 1024);
        expect(screen.isSmall()).toBe(false);
    });

    it('should react on window scale down', function() {
        var window = createWindow(1024);
        var screen = createScreen(window);
        resizeWindow(window, 256);
        expect(screen.isSmall()).toBe(true);
    });
});
