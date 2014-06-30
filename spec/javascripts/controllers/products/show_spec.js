(function(){
  'use strict';

  describe('Controller: ProductsShowCtrl', function () {
    var scope, ctrl, $httpBackend, fakeData;
    
    fakeData = {title: "test 1", description: "description 1"};

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/1.json').
          respond(fakeData);

      $routeParams.productId = '1';
      scope = $rootScope.$new();
      ctrl = $controller('ProductsShowCtrl', {$scope: scope});
    }));


    it('should fetch product detail', function() {
      $httpBackend.flush();

      expect(scope.product).toEqualData(fakeData);
    });
  });
})();
