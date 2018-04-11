angular.module("helloFilterModule",["dataServiceModule","tempFilterModule"])
    .controller("helloFilterCtrl", function ($scope, dataService) {
        $scope.today = new Date();
        $scope.data = dataService;
       // console.log($scope.data);
    });