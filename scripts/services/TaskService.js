app.service('TaskService',['$http','$cookies','$rootScope', function($http,$cookies){
    this.my_tasks = getMyTasks;

    function getMyTasks(callback) {
        console.log("TaskService - getMyTask");
        var session_id = $cookies.get('pssdash_session');
        var req_url = backendHostname+'/tasks?action=GetMyTasks'+'&'+'session_id='+session_id;     
        $http({
            url: req_url,
            method: 'POST'
        }).success(function (data, status, header, config){
            callback(data.data);
            console.log('TaskService - getMyTasks data.data:'+data.data);

        });
    };
}]);