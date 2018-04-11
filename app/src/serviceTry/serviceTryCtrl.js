angular.module("serviceTryModule", [])
    //定义一个服务，返回两个controller的共享数据。返回的一定是一个对象擦能实现另个控制器间的双向绑定
    //service与factory的区别在于service只能返回对象，不能返回字符串
    //service与factory相当于$get方法
    /*$provide.provider("Try",function () {
        $get(function () {
            retrun {
                message:"共享的信息"
            };
        });
    })*/
    .factory("Try",function () {
        return {
            message:"共享的信息"
        };
    })
    //第一个controller
    .controller("firstController", function ($scope,Try) {
        //console.log($scope);
        $scope.data = Try;
    })
    //第二个controller
    .controller("secondController",function ($scope,Try) {
        console.log(Try);
        $scope.data = Try;
    });