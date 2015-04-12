angular.module('indexApp')
    .factory('imageService', ['$http', '$log', '$window', '$rootScope', 'socket', 'socketService', 'globals',
        function ($http, $log, $window, $rootScope, socket, socketService, globals) {
            return {
                getFeaturedImages: function () {
                    return $http.get('/api/getFeaturedImages');
                },

                getHotThisWeek: function () {
                    return $http.get('/api/getHotThisWeek');
                },

                getPromotions: function () {
                    return $http.get('/api/getPromotions');
                },

                getInspiredItems: function () {
                    return $http.get('/api/getInspiredItems');
                },

                getRelatedToRecentlyViewed: function () {
                    return $http.get('/api/getRelatedToRecentlyViewed');
                },

                getDiscover: function () {
                    return $http.get('/api/getDiscover');
                }
            };
        }]);