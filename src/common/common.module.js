(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mccbjnn.herokuapp.com')
// https://mccbjnn.herokuapp.com/menu_items.json
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
