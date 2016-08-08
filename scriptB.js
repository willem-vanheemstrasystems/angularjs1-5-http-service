var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http, $log) {
        // Define success callback function
        var successCallBack = function(response) {
            $scope.employees = response.data;
            $log.info(response);
        };
        // Define error callback function
        var errorCallBack = function(reason) {
            $scope.error = reason.data;
            $log.info(reason);
        };
        // Call the Web Service and retrieve the data
        $http({
            method: 'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'
        })
        .then(successCallBack, errorCallBack);
    });
