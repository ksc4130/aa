(function() {
    var app = angular.module('app');

    mvProductDetailCtrl.$inject = ['$scope', 'mvProduct', '$routeParams'];
    app.controller('mvProductDetailCtrl', mvProductDetailCtrl);
    function mvProductDetailCtrl ($scope, mvProduct, $routeParams) {
        console.log('product _id', $routeParams.id);
        $scope.product = mvProduct.get({_id: $routeParams.id});
    }
}());