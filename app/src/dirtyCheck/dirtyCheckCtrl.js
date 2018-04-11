angular.module("dirtyCheckModule", [])
    .controller("dirtyCheckCtrl", ["$scope", "$log", function ($scope, $log) {
        $scope.data = new Date();

        // 值变化了，但是没有更新
        //  setInterval(function(){
        //     $scope.data = new Date();
        //  },1000);

        //$apply比$digest更安全，多一层$eval把关
        setInterval(function () {
            $scope.$apply(function () {
                $scope.data = new Date();
                //触发脏检查
            });
        }, 1000);

        $scope.name = 'name';
        $scope.count = 0;

        //脏检查$watch,监听对象变化加第三个参数true
        $scope.$watch("name", function (newVal, oldVal) {
            ++$scope.count;
            console.log($scope.count);
        });

        $apply = function (expr) {
            try {
                beginPhase('$apply');
                try {
                    return this.$eval(expr);
                } finally {
                    clearPhase();
                }
            } catch (e) {
                $exceptionHandler(e);
            } finally {
                try {
                    $rootScope.$digest();
                } catch (e) {
                    $exceptionHandler(e);
                    throw e;
                }
            }
        };
    }]);