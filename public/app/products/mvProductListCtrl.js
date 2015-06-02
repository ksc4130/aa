(function () {
    var app = angular.module('app');

    mvProductListCtrl.$inject = ['$scope', 'mvProduct', '$routeParams'];
    app.controller('mvProductListCtrl', mvProductListCtrl);
    function mvProductListCtrl ($scope, mvProduct, $routeParams) {
        mvProduct.query().$promise.then(function (items) {
            $scope.products = items.filter(function (item) {
                return item.category.toLowerCase() === $routeParams.cat.toLowerCase();
            })
        });
    };
}());