angular.module("helloDirectiveModule", ['ui.bootstrap'])
    .directive("yuPagination", function () {
        return {
            restrict: "E",
            scope:{
                //数据总数
                totalItems:"=",
                //当前页码数
                currentPage:"=",
                // 页码改变操作回调
                pageChange:"&",
                //页容量，默认为10
                pageCounts: '='
            },
            templateUrl: "helloDirective/helloDirective_tpl.html",
            replace: true,
            controller:function($scope,$log,$timeout){
                $log.log($scope);
                $scope._currentPage = null;

                //点击页码翻页
                $scope._pageChange = function () {
                    $timeout(function() {
                        $scope.pageChange();
                    });
                };

                //输入页码跳页
                $scope.jumpToPage = function () {
                    $scope.currentPage = $scope._currentPage;
                    $timeout(function() {
                        $scope.pageChange();
                    });
                };
            }
        };
    })
    .controller("helloDirectiveCtrl", ["$scope", "dataService","$log", function ($scope, dataService,$log) {
        $log.log($scope);
        $scope.totalItems = 175;
        $scope.currentPage = 1;
        $scope.pageCounts = 5;
        $scope.pageChange = function () {
            alert("告诉后台，请求第"+ $scope.currentPage +"页的数据");
        };
    }]);