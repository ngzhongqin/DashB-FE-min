app.service('TaskService',['$http','$cookies','$rootScope','$location', function($http,$cookies,$rootScope,$location){
    this.my_tasks = getMyTasks;
    this.all_tasks = getAllTasks;
    this.task = getTask;
    this.update_task = updateTask;

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
    
    function getAllTasks(callback) {
        console.log("TaskService - getAllTasks");
        var session_id = $cookies.get('pssdash_session');
        var req_url = backendHostname+'/tasks?action=GetTasks'+'&'+'session_id='+session_id;
    
        $http({
            url: req_url,
            method: 'POST'
        }).success(function (data, status, header, config){
            callback(data.data);
            console.log('TaskService - getAllTasks data.data:'+data.data);
            
              $rootScope.code = data.data.returnStatus.code;
              $rootScope.message = data.data.returnStatus.message;
              if("SEC-104" == data.data.returnStatus.code){
                $location.path("/login")   
              }

        });
    };
    
    function getTask(task_id, callback) {
        console.log("TaskService - getTask task_id:"+task_id);
        var session_id = $cookies.get('pssdash_session');

        var req_url = backendHostname+'/tasks?action=View'+'&'+'task='+task_id+'&'+'session_id='+session_id;
    
        $http({
            url: req_url,
            method: 'POST'
        }).success(function (data, status, header, config){
            callback(data.data);
            console.log('TaskService - getTask data.data:'+data.data);
            
              $rootScope.code = data.data.returnStatus.code;
              $rootScope.message = data.data.returnStatus.message;
            
              if("SEC-104" == data.data.returnStatus.code){
                $location.path("/login")   
              }

        });
    };
    
    function updateTask(task_id,task, callback) {
        console.log("TaskService - updateTask");
        console.log("TaskService - updateTask task.defect:"+task.defect);
        var session_id = $cookies.get('pssdash_session');

        var req_url = backendHostname+'/tasks?action=Update'+'&'+'task='+task_id+'&'+'session_id='+session_id;
    
        var data = {
            'no'     : task.no,
            'defect' : task.defect,
            'incident' : task.incident,
            'owner' : task.owner,
            'description' : task.description,
            'status' : task.status,
            'remarks': task.remarks,
            'datedue': task.datedue
        };
        
        $http({
            url: req_url,
            method: 'POST',
            headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
        }).success(function (data, status, header, config){
            callback(data.data);
            console.log('TaskService - updateTask data.data:'+data.data);
            
              $rootScope.code = data.data.returnStatus.code;
              $rootScope.message = data.data.returnStatus.message;
            
              if("SEC-104" == data.data.returnStatus.code){
                $location.path("/login")   
              }

        });
    };
    
}]);