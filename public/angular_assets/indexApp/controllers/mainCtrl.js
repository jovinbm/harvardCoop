angular.module('indexApp')
    .controller('MainController', ['$q', '$filter', '$log', '$interval', '$window', '$location', '$scope', '$rootScope', 'socket', 'mainService', 'socketService', 'globals', '$modal',
        function ($q, $filter, $log, $interval, $window, $location, $scope, $rootScope, socket, mainService, socketService, globals, $modal) {

            //===============request error handler===============

            //universalDisable variable is used to disable everything crucial in case an error
            //occurs.This is sometimes needed if a reload did not work
            $scope.universalDisable = false;
            $scope.showBanner = false;
            $scope.bannerClass = "";
            $scope.bannerMessage = "";

            $scope.showRegistrationBanner = false;
            $scope.registrationBannerClass = "";
            $scope.registrationBannerMessage = "";

            $scope.universalDisableTrue = function () {
                $scope.universalDisable = true;
            };
            $scope.universalDisableFalse = function () {
                $scope.universalDisable = false;
            };

            $scope.responseStatusHandler = function (resp) {
                if (resp) {
                    if (resp.redirect) {
                        if (resp.redirect) {
                            $window.location.href = resp.redirectPage;
                        }
                    }
                    if (resp.disable) {
                        if (resp.disable) {
                            $scope.universalDisableTrue();
                        }
                    }
                    if (resp.notify) {
                        if (resp.type && resp.msg) {
                            $scope.showToast(resp.type, resp.msg);
                        }
                    }
                    if (resp.banner) {
                        if (resp.bannerClass && resp.msg) {
                            $scope.showBanner = true;
                            $scope.bannerClass = resp.bannerClass;
                            $scope.bannerMessage = resp.msg;
                        }
                    }
                    if (resp.registrationBanner) {
                        if (resp.bannerClass && resp.msg) {
                            $scope.showRegistrationBanner = true;
                            $scope.registrationBannerClass = resp.bannerClass;
                            $scope.registrationBannerMessage = resp.msg;
                        }
                    }
                    if (resp.reason) {
                        $log.warn(resp.reason);
                    }
                } else {
                    //do nothing
                }
            };

            $rootScope.$on('responseStatusHandler', function (event, resp) {
                $scope.responseStatusHandler(resp);
            });


            //===============end of request error handler===============


            //===============isLoading functions to disable elements while content is loading or processing===============
            $scope.isLoading = false;

            $scope.isLoadingTrue = function () {
                $scope.isLoading = true;
            };
            $scope.isLoadingFalse = function () {
                $scope.isLoading = false;
            };

            $rootScope.$on('isLoadingTrue', function () {
                $scope.isLoading = true;
            });

            $rootScope.$on('isLoadingFalse', function () {
                $scope.isLoading = false;
            });

            //===============end of isLoading functions===============

            //===============toastr show functions===============
            $scope.showToast = function (toastType, text) {
                switch (toastType) {
                    case "success":
                        toastr.clear();
                        toastr.success(text);
                        break;
                    case "warning":
                        toastr.clear();
                        toastr.warning(text, 'Warning', {
                            closeButton: true,
                            tapToDismiss: true
                        });
                        break;
                    case "error":
                        toastr.clear();
                        toastr.error(text, 'Error', {
                            closeButton: true,
                            tapToDismiss: true,
                            timeOut: false
                        });
                        break;
                    default:
                        //clears current list of toasts
                        toastr.clear();
                }
            };

            $rootScope.$on('showToast', function (event, data) {
                var toastType = data.toastType;
                var text = data.text;

                $scope.showToast(toastType, text);
            });

            //===============end of toastr show functions===============

            //initial requests
            socketService.getUserData()
                .success(function (resp) {
                    $scope.userData = globals.userData(resp.userData);

                    //join a socketRoom for websocket connection
                    socket.emit('joinRoom', {
                        room: resp.userData.uniqueCuid
                    });

                    $scope.responseStatusHandler(resp);
                })
                .error(function (errResponse) {
                    $scope.responseStatusHandler(errResponse);
                });

            socket.on('joined', function () {
                console.log("JOIN SUCCESS");
            });

            //==================cart functions=====================

            $scope.addToCart = function (componentUniqueCuid) {
                var component = {
                    componentUniqueCuid: componentUniqueCuid,
                    quantity: 1
                };

                socketService.addToCart(component)
                    .success(function (resp) {
                        $scope.userData = globals.userData(resp.userData);
                        $scope.responseStatusHandler(resp);
                        $rootScope.$broadcast('cartChanges');
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    })
            };

            $rootScope.$on('addToCart', function (event, componentUniqueCuid) {
                $scope.addToCart(componentUniqueCuid);
            });

            $scope.removeFromCart = function (componentUniqueCuid) {

                socketService.removeFromCart(componentUniqueCuid)
                    .success(function (resp) {
                        $scope.userData = globals.userData(resp.userData);
                        $scope.responseStatusHandler(resp);
                        $rootScope.$broadcast('cartChanges');
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    })
            };

            $rootScope.$on('removeFromCart', function (event, componentUniqueCuid) {
                $scope.removeFromCart(componentUniqueCuid);
            });

            $scope.increaseQuantity = function (componentUniqueCuid) {
                socketService.increaseQuantity(componentUniqueCuid)
                    .success(function (resp) {
                        $scope.userData = globals.userData(resp.userData);
                        $scope.responseStatusHandler(resp);
                        $rootScope.$broadcast('cartChanges');
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    })
            };

            $scope.decreaseQuantity = function (componentUniqueCuid) {
                socketService.decreaseQuantity(componentUniqueCuid)
                    .success(function (resp) {
                        $scope.userData = globals.userData(resp.userData);
                        $scope.responseStatusHandler(resp);
                        $rootScope.$broadcast('cartChanges');
                    })
                    .error(function (errResponse) {
                        $scope.responseStatusHandler(errResponse);
                    })
            };

            //==================end of cart functions===============

            //variable to hold state between local login and creating a new account
            //values =  signIn, register
            $scope.userLoginState = 'signIn';
            $scope.changeUserLoginState = function (newState) {
                $scope.userLoginState = newState;
            };

            //===============THE LOCAL LOGIN FORM===============

            $scope.loginFormModel = {
                username: "",
                password: ""
            };

            $scope.submitLocalLoginForm = function () {
                socketService.localUserLogin($scope.loginFormModel)
                    .success(function (resp) {
                        //the responseStatusHandler handles all basic response stuff including redirecting the user if a success is picked
                        $scope.responseStatusHandler(resp);
                    })
                    .error(function (errResponse) {
                        $scope.loginFormModel.password = "";
                        $scope.responseStatusHandler(errResponse);
                    });
            };

            //===============END OF LOCAL LOGIN FORM FUNCTIONS===============

            //===============REGISTRATION FORM===============
            //===============registration details and functions===============
            $scope.registrationDetails = {
                email: "",
                firstName: "",
                lastName: "",
                username: "",
                password1: "",
                password2: "",
                invitationCode: ""
            };

            $scope.createAccount = function () {
                socketService.createAccount($scope.registrationDetails)
                    .success(function (resp) {
                        //the responseStatusHandler handles all basic response stuff including redirecting the user if a success is picked
                        $scope.responseStatusHandler(resp);
                    })
                    .error(function (errResponse) {
                        //hide password field since grill selection will be refreshed

                        $scope.registrationDetails.password1 = "";
                        $scope.registrationDetails.password2 = "";
                        $scope.registrationDetails.invitationCode = "";
                        $scope.responseStatusHandler(errResponse);
                    });
            };
            //===============END OF REGISTRATION FORM===============

            //===============contact us form===============
            $scope.contactUsModel = {
                name: "",
                email: "",
                message: ""
            };

            function validateContactUs(name, email, message) {
                var errors = 0;

                if (!name || name.length == 0) {
                    ++errors;
                    $scope.showToast('warning', "Please enter your name");
                    return -1
                } else if (!email || email.length == 0) {
                    ++errors;
                    $scope.showToast('warning', "Please enter a valid email");
                    return -1
                } else if (!message || message.length == 0) {
                    ++errors;
                    $scope.showToast('warning', "Message field is empty");
                    return -1;
                } else if (errors == 0) {
                    return 1;
                }
            }

            $scope.sendContactUs = function () {
                var formStatus = validateContactUs($scope.contactUsModel.name, $scope.contactUsModel.email, $scope.contactUsModel.message);
                if (formStatus == 1) {
                    socketService.sendContactUs($scope.contactUsModel)
                        .success(function (resp) {
                            $scope.contactUsModel.name = "";
                            $scope.contactUsModel.email = "";
                            $scope.contactUsModel.message = "";
                            $scope.responseStatusHandler(resp);
                        })
                        .error(function (errResp) {
                            $scope.responseStatusHandler(errResp);
                        });
                }
            };

            //===============end of contactUs===============


            //===============socket listeners===============

            $rootScope.$on('reconnectSuccess', function () {
            });

            $log.info('MainController booted successfully');

        }
    ]);