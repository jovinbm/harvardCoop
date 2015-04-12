angular.module('indexApp')
    .controller('FeaturedController', ['$q', '$filter', '$log', '$timeout', '$interval', '$window', '$location', '$scope', '$rootScope', 'socket', 'mainService', 'socketService', 'globals', 'imageService', '$modal',
        function ($q, $filter, $log, $timeout, $interval, $window, $location, $scope, $rootScope, socket, mainService, socketService, globals, imageService, $modal) {

            //===============featured
            $scope.featuredImages = [];
            $scope.currentFeaturedImageIndex = 0;

            //variable that carries all items
            $scope.allItems = {};


            $scope.currentFeaturedImage = {
                caption: 'MAC COMFORT',
                src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_500,w_1920/v1428763093/mac_comfort_eulcso.jpg'
            };

            //variable to hold the status if the mouse is over header
            $scope.mouseOverFeatured = false;

            function changeCurrentFeaturedImage() {
                if ($scope.featuredImages.length > 1 && !$scope.mouseOverFeatured) {
                    ++$scope.currentFeaturedImageIndex;
                    if ($scope.currentFeaturedImageIndex == $scope.featuredImages.length) {
                        $scope.currentFeaturedImageIndex = 0;
                    }
                    $scope.currentFeaturedImage = $scope.featuredImages[$scope.currentFeaturedImageIndex];
                }
            }

            $interval(changeCurrentFeaturedImage, 5000, 0, true);


            imageService.getFeaturedImages()
                .success(function (res) {
                    $scope.featuredImages = res.featuredImages;
                    $scope.featuredImages.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR featured");
                });

            //===============end of featured


            //===============hot this week
            $scope.hotThisWeek = [];

            imageService.getHotThisWeek()
                .success(function (res) {
                    $scope.hotThisWeek = res.hotThisWeek;
                    $scope.hotThisWeek.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR featured");
                });

            //===============end of hot this week

            //===============start of promotions
            $scope.promotions = [];

            imageService.getPromotions()
                .success(function (res) {
                    $scope.promotions = res.promotions;
                    $scope.promotions.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR promotions");
                });

            //===============end of promotions


            //===============start of inspired

            $scope.inspiredItems = [];

            imageService.getInspiredItems()
                .success(function (res) {
                    $scope.inspiredItems = res.inspiredItems;
                    $scope.inspiredItems.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR inspired");
                });

            //===============end of inspired

            //===============start of related to recently viewed

            $scope.relatedToRecentlyViewed = [];

            imageService.getRelatedToRecentlyViewed()
                .success(function (res) {
                    $scope.relatedToRecentlyViewed = res.relatedToRecentlyViewed;
                    $scope.relatedToRecentlyViewed.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR relatedToRecentlyViewed");
                });

            //===============end of related to recently viewed

            //===============start of discover

            $scope.discover = [];

            imageService.getDiscover()
                .success(function (res) {
                    $scope.discover = res.discover;
                    $scope.discover.forEach(function (img) {
                        img.show = false;
                        $scope.allItems[img.componentUniqueCuid] = img;
                    });
                })
                .error(function (err) {
                    console.log("ERROR discover");
                });

            //===============end of discover

            //===============modal operations===============

            $scope.openQuickViewModalInstance = function (group, itemIndex) {

                var quickViewModalInstance = $modal.open({
                    templateUrl: 'views/partials/modals/quick_view_item.html',
                    controller: 'QuickViewModalController',
                    resolve: {
                        hotThisWeek: function () {
                            return $scope.hotThisWeek;
                        },
                        promotions: function () {
                            return $scope.promotions;
                        },
                        inspiredItems: function () {
                            return $scope.inspiredItems;
                        },
                        relatedToRecentlyViewed: function () {
                            return $scope.relatedToRecentlyViewed;
                        },
                        discover: function () {
                            return $scope.discover;
                        },
                        item: function () {
                            return {
                                group: group,
                                index: itemIndex
                            }
                        }
                    }
                });

                //returns a promise
                return quickViewModalInstance
            };

            $scope.openQuickView = function (group, itemIndex) {

                var openedQuickView = $scope.openQuickViewModalInstance(group, itemIndex);
                openedQuickView.result
                    .then(function () {
                        console.log("SUCCESS");
                    }, function () {
                        console.log("ERROR");
                    });

            };

            //===============end of modal operations=======

            $scope.cartTotal = 0;

            function calculateCartTotal() {
                var userData = globals.userData();
                var itemsInCart = userData.cart;
                var sum = 0;
                if (itemsInCart) {
                    itemsInCart.forEach(function (item) {
                        sum = sum + (item.quantity * $scope.allItems[item.componentUniqueCuid].price);
                    });
                    $scope.cartTotal = sum;
                }
            }

            calculateCartTotal();

            $rootScope.$on('cartChanges', function () {
                calculateCartTotal();
            });

            $interval(calculateCartTotal, 1000, 0, true);

            $log.info('FeaturedController booted successfully');
        }
    ]);