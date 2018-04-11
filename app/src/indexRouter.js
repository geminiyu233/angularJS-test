angular.module('app',
    [
        "ui.router",
        "ngResource",
        "CartModule",
        "helloFilterModule",
        "serviceTryModule",
        "formModule",
        "helloDirectiveModule",
        "helloHttpModule",
        "httpTestModule",
        "helloResourceCtrlModule",
        "dirtyCheckModule",
        "pictureToolModule",
        "forceDirectedGraphModule"
    ])
    .constant('d3',d3)
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('cart');
        //模板指定了控制器，则在模板中可不用写ng-controller了，若此处没写，则需要在html上写上ng指令
        $stateProvider
            .state('cart', {
                url: '/cart',
                templateUrl: "cart/main.html",
                controller: "cartCtrl"
            })
            .state("helloFilter", {
                url: "/helloFilter",
                templateUrl: "helloFilter/main.html",
                controller: "helloFilterCtrl"
            })
            .state("serviceTry", {
                url: "/serviceTry",
                templateUrl: "serviceTry/serviceTry_tpl.html"
            })
            .state("form", {
                url: "/form",
                templateUrl: "form/form_tpl.html"
            })
            .state("helloDirective", {
                url: "/helloDirective",
                templateUrl: "helloDirective/helloDirective.html",
                controller:"helloDirectiveCtrl"
            })
            // .state("helloHttp", {
            //     url: "/helloHttp",
            //     templateUrl: "helloHttp/helloHttp_tpl.html"
            // })
            .state('helloResource',{
                url:"/helloResource",
                templateUrl: "helloResource/helloResource.html"
            })
            .state('dirtyCheck',{
                url:"/dirtyCheck",
                templateUrl: "dirtyCheck/index.html"
            })
            .state("pictureTool",{
                url:"/pictureTool",
                templateUrl:"pictureTool/index.html"
            })
            .state("forceDirectedGraph",{
                url:"/forceDirectedGraph",
                templateUrl:"forceDirectedGraph/index.html",
                controller:"forceDirectedGraphCtrl"
            });
            
    });
