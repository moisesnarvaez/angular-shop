beforeEach(module('AngularShop'));

beforeEach(function() {
  var matchers = {
    toEqualData: function(expected) {
      return {
        compare: function(actual, expected){
          return {
            pass: angular.equals(actual, expected)
          }
        }
      }
    }
  };

  jasmine.addMatchers(matchers);
});
