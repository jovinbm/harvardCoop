angular.module('indexApp')
    .controller('QuickViewModalController', ['$log', '$scope', '$rootScope', '$modalInstance', 'globals', 'hotThisWeek', 'promotions', 'inspiredItems', 'relatedToRecentlyViewed', 'discover', 'item',
        function ($log, $scope, $rootScope, $modalInstance, globals, hotThisWeek, promotions, inspiredItems, relatedToRecentlyViewed, discover, item) {


            $scope.group = item.group;
            $scope.index = item.index;

            $scope.theItem = {};

            switch ($scope.group) {
                case "hotThisWeek":
                    $scope.theItem = hotThisWeek[$scope.index];
                    break;
                case "promotions":
                    $scope.theItem = promotions[$scope.index];
                    break;
                case "inspiredItems":
                    $scope.theItem = inspiredItems[$scope.index];
                    break;
                case "relatedToRecentlyViewed":
                    $scope.theItem = relatedToRecentlyViewed[$scope.index];
                    break;
                case "discover":
                    $scope.theItem = discover[$scope.index];
                    break;
                default:
                    console.log("switch quick view controller error");
            }

            $scope.addThisToCart = function () {
                $rootScope.$broadcast('addToCart', $scope.theItem.componentUniqueCuid);
            };

            $scope.ok = function () {
                $modalInstance.close("ok");
            };

            $scope.cancel = function () {
                $modalInstance.dismiss("cancel");
            };

            $log.info('AvailableModalController booted successfully');
        }]);


