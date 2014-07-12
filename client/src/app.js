angular.module('irMainPage', ['irServices'])
.controller( 'AppCtrl', function ( $scope, dataFactory ) {
  var rows = [
    {"name": "Saad", "value": "    ---    Aweomsenesnesss"},
    {"name": "Saad", "value": "    ---    Awesome"},
    {"name": "Saad", "value": "    ---    Aweomse"},
    {"name": "Saad", "value": "    ---    Aweomse"}
  ];
  $scope.rows = rows;
  dataFactory.getUsers().success(function(data) {
    console.log(data);
  })
});
