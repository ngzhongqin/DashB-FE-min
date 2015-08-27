app.service('AlertBoxService',['$http','$cookies','$rootScope', function($http,$cookies,$rootScope){
    this.close = closeAlert;
    this.open = openAlert;

    function closeAlert() {
        console.log("AlertBoxService - closeAlert");      
        setTimeout(function(){ 
             $(".alert-box").fadeOut(500);
        }, 2000);
    };
    
    function openAlert() {
        console.log("AlertBoxService - openAlert");
        $(".alert-box").fadeIn(50);
    };
    
}]);