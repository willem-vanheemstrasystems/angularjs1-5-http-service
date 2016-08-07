var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http) {
        // Call the Web Service and retrieve the data
        $http({
            method: 'GET',
            url: 'EmployeeService.asmx/GetAllEmployees'
        })
        .then(function(response){
            // Attach the response data to the scope property 'employees'
            $scope.employees = response.data;
        });
    });
