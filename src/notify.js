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

            var service = {
                list : {},
                add  : function (message) {
                    var timestamp = (new Date()).getTime(),
                        closable = message.closable || (undefined === message.delay);

                    service.list[timestamp] = {
                        text      : message.text,
                        status    : message.status,
                        closable  : closable,
                        timestamp : timestamp || null
                    };

                    $timeout(function () {
                        delete service.list[timestamp];
                    }, (message.delay || 5000));
                }
            };
            return service;
        }
    ]);