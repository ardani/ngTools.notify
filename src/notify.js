/*global angular */

angular.module('Notify', [])
    .controller('notify', [
        '$scope', 'notify',
        function ($scope, notify) {
            'use strict';

            $scope.alerts = notify.list;

            $scope.close = function (timestamp) {
                delete $scope.alerts[timestamp];
            };
        }
    ])
    .factory('notify', [
        '$timeout',
        function ($timeout) {
            'use strict';

            var exception = '[ngTools.Notify] Undefined or misformated message.',
                service = {
                    list : {},
                    add  : function (message) {
                        var timestamp,
                            closable,
                            message_tmp,
                            status;

                        if ('string' === typeof message) {
                            message_tmp = {
                                text : message
                            };
                        } else {
                            message_tmp = message;
                        }

                        try {
                            if ('string' === typeof message_tmp.text) {
                                timestamp = (new Date()).getTime();
                                closable = message_tmp.closable || (undefined === message_tmp.delay);
                                status = message_tmp.status || 'success';

                                service.list[timestamp] = {
                                    text      : message_tmp.text,
                                    status    : status,
                                    closable  : closable,
                                    timestamp : timestamp
                                };

                                $timeout(function () {
                                    delete service.list[timestamp];
                                }, (message_tmp.delay || 5000));
                            } else {
                                throw exception;
                            }
                        } catch ($e) {
                            throw exception;
                        }

                        return service.list[timestamp];
                    }
                };
            return service;
        }
    ]);