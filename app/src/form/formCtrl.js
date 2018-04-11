angular.module("formModule", ["tempFilterModule"])
    .controller("formCtrl", ["$scope", function ($scope) {
        $scope.data=[
            {
                username:"ys"
            }
        ];
        $scope.hobby = ["看书", "画画", "游戏"];
        $scope.cities = [
            {
                name: "四川省",
                parent: 0,
                id: 1
            },
            {
                name: "宜宾市",
                parent: 1,
                id: 2
            },
            {
                name: "长宁县",
                parent: 2,
                id: 3
            },
            {
                name: "吉林省",
                parent: 0,
                id: 4
            },
            {
                name: "长春市",
                parent: 4,
                id: 5
            },
            {
                name: "二道区",
                parent: 5,
                id: 6
            }
        ];

        //默认显示城市
        /*function initCity() {

        };*/

        //县保留一分原始数据，引用类型不能直接复制保存，会互相影响，用angular.copy()
        $scope.origData = angular.copy($scope.data);

        //重置方法，保留默认模型
        $scope.reset = function () {

            //引用类型不能直接复制保存，会互相影响，用angular.copy()
            $scope.data = angular.copy($scope.origData);

            //$setPristine 将表单复位原始状态，class,$dirty,$pristine
            $scope.myFrom.$setPristine();
        };
    }]);