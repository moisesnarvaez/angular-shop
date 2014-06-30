AngularShop.factory('ProductData', [
  '$resource', 'Product', function($resource, Product) {
    
    var ProductData = {
      data: {
        products: [],
        loaded: false  
      }
    };

    ProductData.loadProducts = function(){
      if(!ProductData.data.loaded){
        Product.query({}, function(data){
          ProductData.data.products = data;
          ProductData.data.loaded = true;
        }, function(){
          console.error("ERROR getting Products");
        });
      }
    }

    ProductData.setLoaded = function(loaded){
      ProductData.data.loaded = loaded;
    }

    return ProductData;
  }
]);
