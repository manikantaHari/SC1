;(function(angular) {

    "use strict";

    angular.module('MainModule', ['SidebarModule','AddPhotoModule','ViewPhotoModule']) 
           /* .config(['$stateProvider', '$urlRouterProvider', 'blockUIConfig', function($stateProvider, $urlRouterProvider, blockUIConfig,$scope) { 

                blockUIConfig.autoBlock = false;
                // Redirect any unmatched url
                $urlRouterProvider.otherwise("/dashboard");  
                $stateProvider
                .state('SearchModule', {
                    url: "/candidates/search",
                    templateUrl: "views/candidates/search.html",            
                    controller: "SearchController",
                
                }) 
                
            }])*/
  

.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider,  $urlRouterProvider) {
	alert();
    
    $urlRouterProvider.otherwise("/dashboard"); 
    
    $stateProvider
    
    
    .state('AddPhotoModule', {
        url: "/addphoto",
        templateUrl: "views/addphotoalbum.html",            
        controller: "AddPhotoController"  
    })
    
    .state('ViewPhotoModule', {
        url: "/viewphoto",
        templateUrl: "views/viewphotoalbum.html",            
        controller: "ViewPhotoController"  
    })
    
    


}])

})(angular);