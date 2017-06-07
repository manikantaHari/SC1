;(function(angular) {

    "use strict";
    angular.module("app",['ui.router','DashBoardModule','ProductListModule','MyCarttModule','CreateProductModule'])
    	
    
    .config(['$stateProvider', '$urlRouterProvider',  function($stateProvider,  $urlRouterProvider) {
    	
        
        $urlRouterProvider.otherwise("/dashboard"); 
        
      $stateProvider
        
        
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",            
            controller: "DashBoardController"  
        })
        
         .state('productList', {
            url: "/productList",
            templateUrl: "views/productlist.html",            
            controller: "ProductListController"  
        })
        
           .state('myCart', {
            url: "/myCart/:code",
            templateUrl: "views/mycart.html",            
            controller: "MyCartController"  
        })
        
             .state('createProduct', {
            url: "/createProduct",
            templateUrl: "views/createproduct.html",            
            controller: "CreateProductController"  
        })


    }])

    	    
    
})(angular);