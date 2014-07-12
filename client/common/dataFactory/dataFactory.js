angular.module('irServices', [])
.factory('dataFactory', function( $http ) {
  var dataFactory = {};

  dataFactory.getUsers = function() {
    return $http.get("users.json");
  }

  return dataFactory;
});
