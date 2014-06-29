(function(){
  'use strict';

  describe('Controller: ProductsIndexCtrl', function () {
    
    beforeEach(module('AngularShop'));

    describe('ProductsIndexCtrl', function(){
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
        expect(scope.products).toEqual([]);
        $httpBackend.flush();

        expect(JSON.stringify(scope.products)).toEqual(JSON.stringify(fakeData));
      });
    });
  });
})();
