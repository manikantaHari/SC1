;(function(angular) {

    "use strict";
    angular.module("CreateProductModule",['ui.router'])
    	
    	 .controller('CreateProductController',['$scope','$http',function($scope,$http){
    	    	$scope.createproduct = {};
    	    	
    	    	$scope.submit = function(){
    	    		alert(JSON.stringify($scope.createproduct));
    	    		
    	    		
    	    		var response = $http.post("/SC2/CreateProduct/addProduct",$scope.createproduct);
       	    	 response.success(function(data,status,headers,config){
   	    			 alert("success");
   	    		 });
   	    		 response.error(function(data,status,headers,config){
   	    			 alert("ggfdg");
   	    		 });
       	    	
    	    	}
    	    	
    	    	$scope.reset = function(){
    	    		$scope.createproduct = {};
    	    	}
    	    	
    	    }])
    	    
    	    
       	 .directive("fileread", [
       	                      function() {
       	                        return {
       	                          scope: {
       	                            fileread: "="
       	                          },
       	                          link: function(scope, element, attributes) {
       	                            element.bind("change", function(changeEvent) {
       	                              var reader = new FileReader();
       	                              reader.onload = function(loadEvent) {
       	                                scope.$apply(function() {
       	                                  scope.fileread = loadEvent.target.result;
       	                                });
       	                              }
       	                              reader.readAsDataURL(changeEvent.target.files[0]);
       	                            });
       	                          }
       	                        }
       	                      }
       	                      ]); 
    
})(angular);