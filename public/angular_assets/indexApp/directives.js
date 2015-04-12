angular.module('indexApp')
    .directive('quickView', [function () {
        return {
            templateUrl: 'views/partials/modals/quick_view_item.html',
            restrict: 'AEC',
            link: function ($scope, $element, $attrs) {
            }
        };
    }]);