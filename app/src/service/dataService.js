angular.module("dataServiceModule", []).factory("dataService", function () {
    var obj = [
        {
            id: 1,
            name: "ys",
            city: "成都"
        },
        {
            id: 2,
            name: "yj",
            city: "重庆"
        }];
    return obj;
});