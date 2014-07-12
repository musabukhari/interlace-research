describe('DataFactory', function() {
  var df, $httpBackend;
  beforeEach(function() {
    module('irServices');
    inject(function(dataFactory, _$httpBackend_) {
      df =  dataFactory;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should get users', function() {
    var jsonValue;
    $httpBackend.expectGET('users.json').respond(['one', 'two']);
    df.getUsers().success(function(data) {
      jsonValue = data;
    });
    $httpBackend.flush();
    expect(jsonValue.length).toBe(2);
  });

});
