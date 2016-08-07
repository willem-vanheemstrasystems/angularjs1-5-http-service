# angularjs1-5-http-service
AngularJS 1.5 $http service

Based on '$http service' at https://www.youtube.com/watch?v=GsSAEh4K4Sw&index=18&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

#$http service

The $http service is used to make HTTP requests to a remote server.

The $http service is a function that has a single input parameter, i.e. a configuration object.

Example: The following example issues a GET request to the specified URL

```javascript
$http({
  method: 'GET',
  url: 'EmployeeService.asmx/GetAllEmployees'
});
```

Complete list of properties supported by the configuration object.
see https://docs/angularjs.org/api/ng/service/$http#usage

Shortcut methods like ```get```, ```post```, ```put```, ```delete``` etc are also available to be used with $http service.

Example: Using the shortcut method get()

```javascript
$http.get('EmployeeService.asmx/GetAllEmployees')
```

The $http service returns a promise object. That means these functions are executed asynchronously and the data that these functions return may not be available immediately.

Because of this reason you ***cannot*** use the ```return``` value of the http service.

```javascript
THIS WILL NOT WORK:
$scope.employees = $http.get('EmployeeService.asmx/GetAllEmployees');
```

Instead use the ```then()``` method.

```javascript
$scope.employees = $http.get('EmployeeService.asmx/GetAllEmployees')
                    .then(function(response) {
                        $scope.employees = response.data;
                    });
```



Watch the video how to create a Web Service in ASP.NET.
***This service is not included in our file, sorry.***

All angular code is in these files, however.

See script.js, index.html and styles.css how to implement this.
