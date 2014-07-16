angular.module('irServices', [])
.factory('dataFactory', function( $window, $injector ) {
  if ($window.DEBUG) {
  	return $injector.get('debugDataFactory');
  } else {
  	return $injector.get('productionDataFactory');
  }
})
.factory('debugDataFactory', function(  ) {
	$http.get('users.json')
})
.factory('productionDataFactory', function () {
	$http.get('http://....')
})