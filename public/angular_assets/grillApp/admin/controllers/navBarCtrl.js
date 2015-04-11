angular.module('grillApp')
    .controller('NavBarController', ['$q', '$window', '$log', '$scope', '$rootScope', 'logoutService',
        function ($q, $window, $log, $scope, $rootScope, logoutService) {

            $scope.logoutAdminFull = function () {
                logoutService.logoutAdminFull()
                    .success(function (resp) {
                        $scope.responseStatusHandler(resp);
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    });
            };

            $scope.logoutAdminSession = function () {
                logoutService.logoutAdminSession()
                    .success(function (resp) {
                        $scope.responseStatusHandler(resp);
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    });
            };

            $log.info('NavBarController booted successfully');
        }]);