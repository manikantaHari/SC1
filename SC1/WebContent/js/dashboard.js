;(function(angular) {

    "use strict";
    angular.module("DashBoardModule",['ui.router'])
    	
    	 .controller('DashBoardController',['$scope','$http',function($scope,$http){
    	    	
    	    	$scope.obj = {"UserName": "manikanta",
    	    			      "Password" : "12345"}
    	    	
    	    	var response = $http.post("/SC2/MainController/firstController",$scope.obj);
    	    	 response.success(function(data,status,headers,config){
	    			 alert("success");
	    		 });
	    		 response.error(function(data,status,headers,config){
	    			 alert("ggfdg");
	    		 });
    	    	
    	    	
    	    }])
    
})(angular);