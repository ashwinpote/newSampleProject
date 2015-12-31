'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
		console.log("Welcome to mainCtrl");
      this.awesomeThings = response.data;
    });
  }
}

angular.module('sampleProjectApp')
  .controller('MainController', MainController);

})();
