;(function(angular) {

    "use strict";
    angular.module("ProductListModule",['ui.router'])
    	
    	 .controller('ProductListController',['$scope','$http','$state',function($scope,$http,$state){
    	    	$scope.productList = "Product List";
    	    	$scope.productList = {};
    	    	 var productListData = [];
    			var response = $http.post("/SC2/CreateProduct/getProductList",$scope.createproduct);
      	    	 response.success(function(data,status,headers,config){
  	    			// alert("success");
  	    			// alert(JSON.stringify(data[1].image));
  	    			
  	    			 $scope.productList = data;
  	    			/* for(var i=0; i<data.length; i++){
  	    				 var productList = data[i];
  	    				 productListData.push(productList);
  	    			 }*/
  	    		 });
  	    		 response.error(function(data,status,headers,config){
  	    			 alert("ggfdg");
  	    		 });
  	    		 
  	    		
  	    		$scope.buyNow = function(code){
  	    			alert(code);
  	    			
  	    			$state.transitionTo("myCart",{code  : code});
  	    		}
    	    }])
    
})(angular);