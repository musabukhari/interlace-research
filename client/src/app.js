angular.module('irMainPage', [])
.controller( 'AppCtrl', function ( $scope ) {
  var rows = [
    {"name": "Saad", "value": "    ---    Aweomsenesnesss"},
    {"name": "Saad", "value": "    ---    Aweomse"},
    {"name": "Saad", "value": "    ---    Aweomse"},
    {"name": "Saad", "value": "    ---    Aweomse"}
  ];
  $scope.rows = rows;
});
