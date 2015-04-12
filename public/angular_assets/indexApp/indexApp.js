angular.module('indexApp', [
    'ui.bootstrap',
    'angular-loading-bar',
    'angulartics',
    'angulartics.google.analytics',
    'angularMoment',
    'ui.router',
    'duScroll',
    'ngFx',
    'ngAnimate'
])
    .run(function ($templateCache, $http) {
        //views

        //partials
        //partials->navs
        //partials->modals
        $http.get('views/partials/modals/quick_view_item.html', {cache: $templateCache});
    });