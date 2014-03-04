/*globals beforeEach, describe, it, module, inject, expect */

describe('Controller : Notify', function () {
    'use strict';

    var ctrl,
        scope;

    beforeEach(module('Notify'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('notify', {
            $scope : scope
        });
    }));

    it('should be correctly defined', function () {
        expect(scope).toBeDefined();
        expect(typeof scope).toBe('object');
        expect(Object.keys(scope).length).toBe(12);
        expect(scope.alerts).toBeDefined();
        expect(typeof scope.alerts).toBe('object');
        expect(Object.keys(scope.alerts).length).toBe(0);
        expect(scope.close).toBeDefined();
        expect(typeof scope.close).toBe('function');
    });
});