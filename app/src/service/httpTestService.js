/**
 * $http与$q,promise的关系与用处
 */
angular.module("httpTestModule", [])
    .factory("httpTestService", ["$q", "$http", function ($q, $http) {
        return {
            httpService: function (method, url, params) {
                //q服务是在AngularJS中用来创建promise对象的，但它首先创建一个defered对象
                var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
                //$http(options)返回的是一个被封装的promise对象
                $http({
                    method: method,
                    url: url,
                    headers: {
                        'formdata': "1",
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: method == 'POST' ? params : "",
                    params: method == 'POST' ? "" : params
                }).
                then(function (data, status, headers, config) {
                        deferred.resolve(data); // 声明执行成功，即http请求数据成功，可以返回数据了
                    },
                    function (data, status, headers, config) {
                        deferred.reject(data); // 声明执行失败，即服务器返回错误
                    });
                return deferred.promise; // 返回承诺，这里并不是最终数据，而是访问最终数据的API,
                // 把defered对象中的promise对象返回出来
            } // end httpService
        };
    }]);