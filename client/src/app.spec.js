describe('Main page test', function() {
  var AppCtrl, $scope;

  beforeEach(function() {
      module('irMainPage', 'irServices');
  });

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    var mockDataFactory = {
        getUsers: function() {
            return {
                success: function(fn) {
                    fn(
                        [{
                            'name': 'John',
                            'age': 27
                        }, {
                            'name': 'Andrew',
                            'age': 23
                        }]

                    );
                }
            };
        }
    };


      AppCtrl = $controller('AppCtrl', {
          $scope: $scope,
          dataFactory: mockDataFactory
      });
  }));


  it('should pass a dummy test', inject(function() {
      expect(AppCtrl).toBeTruthy();
  }));

  it('should list values', inject(function() {
      expect($scope.rows.length).toBe(2);
      expect($scope.rows[0].name).toBe('John');
  }));

});
