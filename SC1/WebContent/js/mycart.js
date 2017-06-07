;(function(angular) {

    "use strict";
    angular.module("MyCarttModule",['ui.router','ui.bootstrap','ngStorage'])
    	
    	 .controller('MyCartController',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
    	    	$scope.mycart = "My Cart";
    	    	if($stateParams.code!=null){
    	    		
    	    		alert($stateParams.code);
    	    	var obj = {"code" :$stateParams.code};
    	    	
    	    	var response = $http.post("/SC2/CartController/mycart",obj);
     	    	 response.success(function(data,status,headers,config){
 	    			 alert("success");
 	    			 alert(JSON.stringify(data));
 	    			
 	    			 $scope.myCartData = data;
 	    		 });
 	    		 response.error(function(data,status,headers,config){
 	    			 alert("ggfdg");
 	    		 });
    	    	}
    	    
    	    	
    	    }])
    
})(angular);