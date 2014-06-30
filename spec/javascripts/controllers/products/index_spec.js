(function(){
  'use strict';

  describe('Controller: ProductsIndexCtrl', function () {
    
    var scope, ctrl, $httpBackend, fakeData;
    
    fakeData = [
      {title: "test 1", description: "description 1"},
      {title: "test 2", description: "description 2"}
    ];

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products.json').
          respond(fakeData);

      scope = $rootScope.$new();
      ctrl = $controller('ProductsIndexCtrl', {$scope: scope});
    }));


    it('should fetch products', function() {
      expect(scope.data.products).toEqualData([]);
      $httpBackend.flush();

      expect(scope.data.products).toEqualData(fakeData);
    });

    it('have valid order options', function() {
      expect(typeof(scope.orderOptions)).toEqual("object");
    });

    it('should set the default value of ordering', function() {
      expect(scope.ordering.name).toBe('title');
    });
  });
})();
