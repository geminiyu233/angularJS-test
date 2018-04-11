angular.module("helloHttpModule", [])
    .controller("helloHttpCtrl", ["$scope","httpTestService", function ($scope,httpTestService) {
        var promise = httpTestService.httpService("GET","https://randomuser.me/api/",""); // 同步调用，获得承诺接口
        promise.then(function(data) {  // 调用承诺API获取数据 .resolve
            $scope.data = data;
        }, function(data) {  // 处理错误 .reject
            $scope.data = {error: '用户不存在！'};
        });
    }]);