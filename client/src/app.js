angular.module('irMainPage', ['irServices'])
.controller( 'AppCtrl', function ( $scope, dataFactory ) {
  dataFactory.getUsers().success(function(users) {
    $scope.rows = users;
  });
});


$("[name='my-checkbox']").bootstrapSwitch();