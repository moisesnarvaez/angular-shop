(function(){
  'use strict';

  describe('Controller: ProductCtrl', function () {
    var scope, ctrl, $httpBackend, fakeData;
    fakeData = {title: "test 1", description: "description 1"};

    describe('Editing an existing product', function () {  

      beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller, ProductData) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('products/1.json').respond(fakeData);

        $routeParams.productId = '1';
        scope = $rootScope.$new();
        ctrl = $controller('ProductCtrl', {$scope: scope});
      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
      });


      it('should fetch product detail', function() {
        $httpBackend.flush();
        expect(scope.product).toEqualData(fakeData);
      });

      it('should set isNew as false', function() {
        $httpBackend.flush();
        expect(scope.isNew).toBe(false);
      });

      it('should send PUT action in saveProduct', function() {
        $httpBackend.flush();
        $httpBackend.expectPUT('products/1.json').respond(fakeData);
        scope.saveProduct();
      });
    });
    
    describe('Editing an existing product', function () {
      beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller, ProductData) {
        $httpBackend = _$httpBackend_;

        scope = $rootScope.$new();
        ctrl = $controller('ProductCtrl', {$scope: scope});
      }));

      afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
      });

      it('should set isNew as true', function() {
        expect(scope.isNew).toBe(true);
      });

      it('should send PUT action in saveProduct', function() {
        $httpBackend.expectPOST('products.json').respond(fakeData);
        scope.saveProduct();
      });
    });
  });
})();
