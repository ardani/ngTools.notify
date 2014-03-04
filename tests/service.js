/*globals beforeEach, describe, it, module, inject, expect */

describe('Service : Notify', function () {
    'use strict';

    var service;

    beforeEach(module('Notify'));

    beforeEach(inject(function (notify) {
        service = notify;
    }));

    it('should be correctly defined', function () {
        expect(service).toBeDefined();
        expect(typeof service).toBe('object');
        expect(Object.keys(service).length).toBe(2);
        expect(service.add).toBeDefined();
        expect(typeof service.add).toBe('function');
        expect(service.list).toBeDefined();
        expect(typeof service.list).toBe('object');
    });

    it('should throw an exception cause of a non-object message', function () {
        expect(function () {
            service.add();
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(null);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(0);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(1);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(Infinity);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(-Infinity);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(NaN);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add({});
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add([]);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(true);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
        expect(function () {
            service.add(false);
        }).toThrow('[ngTools.Notify] Undefined or misformated message.');
    });

    it('should not throw', function () {
        expect(function () {
            service.add({
                text : 'a'
            });
        }).not.toThrow();
        expect(function () {
            service.add('a');
        }).not.toThrow();
        expect(function () {
            service.add('0');
        }).not.toThrow();
    });

    it('should add a simple message', function () {
        var timestamp_tmp = (new Date()).getTime(),
            message_tmp = service.add({
                text : 'a'
            });

        expect(message_tmp).toBeDefined();
        expect(typeof message_tmp).toBe('object');
        expect(Object.keys(message_tmp).length).toBe(4);
        expect(message_tmp.text).toBeDefined();
        expect(typeof message_tmp.text).toBe('string');
        expect(message_tmp.text).toBe('a');
        expect(message_tmp.status).toBeDefined();
        expect(typeof message_tmp.status).toBe('string');
        expect(message_tmp.status).toBe('success');
        expect(message_tmp.closable).toBeDefined();
        expect(typeof message_tmp.closable).toBe('boolean');
        expect(message_tmp.closable).toBe(true);
        expect(message_tmp.timestamp).toBeDefined();
        expect(typeof message_tmp.timestamp).toBe('number');
        expect(message_tmp.timestamp).toBe(timestamp_tmp);
    });

    it('should add a message with a status', function () {
        var timestamp_tmp = (new Date()).getTime(),
            message_tmp = service.add({
                text : 'a',
                status : 'error'
            });

        expect(message_tmp).toBeDefined();
        expect(typeof message_tmp).toBe('object');
        expect(Object.keys(message_tmp).length).toBe(4);
        expect(message_tmp.text).toBeDefined();
        expect(typeof message_tmp.text).toBe('string');
        expect(message_tmp.text).toBe('a');
        expect(message_tmp.status).toBeDefined();
        expect(typeof message_tmp.status).toBe('string');
        expect(message_tmp.status).toBe('error');
        expect(message_tmp.closable).toBeDefined();
        expect(typeof message_tmp.closable).toBe('boolean');
        expect(message_tmp.closable).toBe(true);
        expect(message_tmp.timestamp).toBeDefined();
        expect(typeof message_tmp.timestamp).toBe('number');
        expect(message_tmp.timestamp).toBe(timestamp_tmp);
    });
});