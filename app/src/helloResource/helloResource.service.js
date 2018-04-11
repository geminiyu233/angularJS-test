/**
 *create by yu.shuang in 2017/12/21
 *
 */

angular.module("helloResourceServiceModule", [])
    .factory("helloResourceService", ["$scope","$resource",function ($scope,$resource) {
        return {
            httpService: function (method, url, params) {
                $scope.filingStandardQuest = $resource(url,data, {
                    //扩展的自定义配置
                    trsPost: {
                        method: "Post",
                        url: url,
                        params: {id: "4"},//参数
                        interceptor: {//拦截对象有两个可选方法-response和responseError
                            response: function (d) {
                                console.log(d);
                            },
                            responseError: function (d) {
                                console.log(d);//这里的是随便写的地址，所以执行了error里的函数，可打印看参数及结果
                            }
                        }
                    },
                    trsGet:{

                    }
                });
            }
        };
    }
    ]);