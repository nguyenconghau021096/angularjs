app.controller('mainCtrl', function($scope, $http) {
   $scope.data = {};
    
    //$http.get('json/books.json')
    //    .success(function(data) {
    //        $scope.data.books = data;
    //    })
    //    .error(function (error) {
    //      $scope.data.error = error;
    //    })
    $http.get("json/books.json").then(successCallback, errorCallback);

    function successCallback(respond) {
        $scope.data.books = respond.data;
    }

    function errorCallback(error) {
        $scope.data.error = error;
    }
    
});