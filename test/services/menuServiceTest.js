'use strict';

describe('factory: Menu', function () {
    var menu;

    beforeEach(function() {
        module('cookBookApp');

        inject(function (_menu_) {
            menu = _menu_;
        })
    });

    it('should be open by default', function () {
        expect(menu.isOpen()).toBe(true);
    });

    it('should be possible to open', function () {
        menu.open();
        expect(menu.isOpen()).toBe(true);
    });

    it('should be possible to close', function () {
        menu.close();
        expect(menu.isOpen()).toBe(false);
    });

    it('should be open after toggle if it was closed before', function () {
        menu.close();
        menu.toggle();
        expect(menu.isOpen()).toBe(true);
    });

    it('should be closed after toggle if it was open before', function () {
        menu.open();
        menu.toggle();
        expect(menu.isOpen()).toBe(false);
    });
});