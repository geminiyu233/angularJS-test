/**
 *create by yu.shuang in 2017/12/21
 *
 */

angular.module("helloResourceCtrlModule", [])
    .controller("helloResourceCtrl", ["$scope","$resource", function ($scope,$resource) {
        /*var ysResource = $resource("https://randomuser.me/api/");
        ysResource.get(function (data) {
            console.log(data.results[0].cell);
        }, function (data) {
            console.log(data.results);
        });*/

        var filingStandardQuest = $resource("https://randomuser.me/api/",{}, {
            //扩展的自定义配置
            trsPost: {
                method: "GET"
            }
        });

        filingStandardQuest.trsPost({},function (data) {
            $scope.data = data;
        });
    }]);