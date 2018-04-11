/**
 *create by yu.shuang in 2017/12/21
 *
 */

angular.module("forceDirectiveServiceModule", [])
    .factory("forceDirectiveService", ["$scope","$resource",function ($scope,$resource) {
        return {
            nodeResource: function () {
                return $resource('app/src/forceDirectedGraph/data.json').get();
            }
        };
    }
    ]);