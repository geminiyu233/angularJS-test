angular.module("tempFilterModule", [])
    .filter("filterCity", function () {
        return function (data,parent) {
            var filterData = [];
            angular.forEach(data,function (item) {
                if(item.parent === parent){
                    filterData.push(item);
                }
            });
            return filterData;
        };
    });