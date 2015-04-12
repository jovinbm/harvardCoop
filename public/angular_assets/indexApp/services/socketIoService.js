angular.module('indexApp')

    .factory('socket', ['$log', '$location', '$rootScope',
        function ($log, $location, $rootScope) {
            var url;
            if ($location.port()) {
                url = $location.host() + ":" + $location.port();
            } else {
                url = $location.host();
            }
            var socket = io.connect(url);
            //return socket;
            return {
                on: function (eventName, callback) {
                    socket.on(eventName, function () {
                        var args = arguments;
                        $rootScope.$apply(function () {
                            callback.apply(socket, args);
                        });
                    });
                },

                emit: function (eventName, data, callback) {
                    socket.emit(eventName, data, function () {
                        var args = arguments;
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback.apply(socket, args);
                            }
                        });
                    });
                },

                removeAllListeners: function (eventName, callback) {
                    socket.removeAllListeners(eventName, function () {
                        var args = arguments;
                        $rootScope.$apply(function () {
                            callback.apply(socket, args);
                        });
                    });
                }
            };
        }])


    .factory('socketService', ['$log', '$http', '$rootScope',
        function ($log, $http, $rootScope) {

            return {

                getUserData: function () {
                    //give this user a temporary socketRoom using cuid()
                    //when the server does not find the user
                    return $http.get('/api/getUserData');
                },

                createAccount: function (details) {
                    return $http.post('/createAccount', details);
                },

                localUserLogin: function (loginData) {
                    return $http.post('/localUserLogin', loginData);
                },

                sendContactUs: function (contactUsModel) {
                    return $http.post('/contactUs', contactUsModel);
                },

                addToCart: function (componentObject) {
                    return $http.post('/api/addToCart', {
                        component: componentObject
                    });
                },

                increaseQuantity: function (componentUniqueCuid) {
                    return $http.post('/api/increaseQuantity', {
                        componentUniqueCuid: componentUniqueCuid
                    });
                },

                decreaseQuantity: function (componentUniqueCuid) {
                    return $http.post('/api/decreaseQuantity', {
                        componentUniqueCuid: componentUniqueCuid
                    });
                },

                removeFromCart: function (componentUniqueCuid) {
                    return $http.post('/api/removeFromCart', {
                        componentUniqueCuid: componentUniqueCuid
                    });
                }
            }
        }
    ]);