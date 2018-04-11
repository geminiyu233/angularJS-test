angular.module("CartModule", [])
    .controller("cartCtrl", ["$scope",function ($scope) {
        $scope.cartData = [
            {
                id: 1,
                name: "iphone5",
                quantity: 2,
                price: 4000
            },
            {
                id: 2,
                name: "iphone5s",
                quantity: 4,
                price: 8000
            },
            {
                id: 3,
                name: "iphone6s",
                quantity: 6,
                price: 10000
            }];

        //计算总价
        $scope.allPrice = function () {
            var totalPrice = 0;
            angular.forEach($scope.cartData, function (item) {
                totalPrice += item.price * item.quantity;
            });
            return totalPrice;
        };

        //计算总数量
        $scope.allQuantity = function () {
            var totalQuantity = 0;
            angular.forEach($scope.cartData, function (item) {
                totalQuantity += parseInt(item.quantity);
            });
            return totalQuantity;
        };

        //查找当前行的索引
        function findIndex(id) {
            var index = -1;
            angular.forEach($scope.cartData, function (item, key) {
                if (item.id === id) {
                    index = key;
                    return;
                }
            });
            return index;
        }

        //移除当前一行
        $scope.remove = function (id) {
            var index = findIndex(id);
            if (index != -1) {
                $scope.cartData.splice(index, 1);
            }
        };

        //删除所有
        $scope.removeAll = function () {
            $scope.cartData = [];
        };

        //增加当前商品的数量
        $scope.add = function (id) {
            //console.log(id);
            var index = findIndex(id);
            if (index != -1) {
                ++$scope.cartData[index].quantity;
            }
        };

        //减少当前商品的数量
        $scope.reduce = function (id) {
            var index = findIndex(id);
            if (index != -1) {
                if ($scope.cartData[index].quantity > 1) {
                    --$scope.cartData[index].quantity;
                } else {
                    var returnKey = confirm("是否删除该产品？");
                    if (returnKey) {
                        $scope.cartData.splice(index, 1);
                    }
                }
            }
        };

        //脏检查
        $scope.$watch("cartData",function (newVal,oldVal) {
            angular.forEach(newVal,function (item,key) {
                if(item.quantity <1){
                    var returnKey = confirm("是否删除该产品？");
                    if (returnKey) {
                        $scope.cartData.splice(index, 1);
                    }else {
                        item.quantity = oldVal[key].quantity;
                    }
                }
            });
        },true);

        //排序
        $scope.order = "id";
        $scope.orderType = true;
        $scope.changeOrder = function (type) {
            $scope.order = type;

            if($scope.orderType){
                $scope.orderType = false;
            }else{
                $scope.orderType = true;
            }
        };
    }]);