(function () {
    'use strict';
    angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap']);
    angular.module('app').config(function ($routeProvider, $locationProvider) {
        var routeRoleChecks = {
            admin: {
                auth: function (mvAuth) {
                    return mvAuth.authorizeCurrentUserForRoute('admin');
                }
            },
            user: {
                auth: function (mvAuth) {
                    return mvAuth.authorizeAuthenticatedUserForRoute();
                }
            }
        };

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'
        }).when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve: routeRoleChecks.admin
        }).when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        }).when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl'
        }).when('/products/:cat', {
            templateUrl: '/partials/products/product-list',
            controller: 'mvProductListCtrl'
        }).when('/product/:id', {
            templateUrl: '/partials/products/product-detail',
            controller: 'mvProductDetailCtrl'
        });
    });

    angular.module('app')
        .run(function ($rootScope, $location) {
            $rootScope.$on('$routeChangeError', function (evt, current, prev, rejection) {
                if(rejection === 'not authorized') {
                    $location.path('/');
                }
            });
        });
}());
