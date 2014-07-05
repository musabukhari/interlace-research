describe('isCurrentUrl', function () {
  var AppCtrl, $location, $scope;

  beforeEach(module('irMainPage'));

  beforeEach(inject(function ($controller, _$location_, $rootScope) {
    $location = _$location_;
    $scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $location: $location,
      $scope: $scope
    });
  }));


  it('should pass a dummy test', inject(function () {
    expect(AppCtrl).toBeTruthy();
  }));

  it('should list values', inject(function () {
    expect($scope.rows.length).toBe(4);
    expect($scope.rows[0].name).toBe('Saad');
  }))
});
