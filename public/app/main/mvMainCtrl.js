angular.module('app').controller('mvMainCtrl', function ($scope, mvProduct) {
    mvProduct.query().$promise.then(function (items) {
        $scope.products = items.filter(function (item) {
            return item.featured;
        })
    });

    //$scope.courses = mvCachedCourses.query();
    //$scope.products = [
    //    {
    //        imgs: ['/img/products/r1-1.jpg'],
    //        title: '36" Hudson Bay',
    //        price: 125,
    //        featured: true,
    //        category: 'axes'
    //    },
    //    {
    //        imgs: ['/img/products/r2-1.jpg'],
    //        title: '36" Connecticut',
    //        price: 100,
    //        featured: true,
    //        category: 'axes'
    //    },
    //    {
    //        imgs: ['/img/products/r3-1.jpg'],
    //        title: '36" Connecticut',
    //        price: 100,
    //        featured: true,
    //        category: 'axes'
    //    }
    //];
});