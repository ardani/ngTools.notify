/*globals beforeEach, describe, it, module, inject, expect */

describe('Service : Notify', function () {
    'use strict';

    var service;

    beforeEach(module('Notify'));

    beforeEach(inject(function (notify) {
        service = notify;
    }));

    describe('notify', function () {
        it('should be correctly defined', function () {
            expect(service).toBeDefined();
            expect(typeof service).toBe('object');
            expect(Object.keys(service).length).toBe(2);
            expect(service.add).toBeDefined();
            expect(typeof service.add).toBe('function');
            expect(service.list).toBeDefined();
            expect(typeof service.list).toBe('object');
        });
    });
});