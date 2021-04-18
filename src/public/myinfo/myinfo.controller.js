(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignupService', 'ApiPath'];

function MyinfoController(SignupService, ApiPath) {
  var $ctrl = this;
  $ctrl.userData = SignupService.getUserData();
  $ctrl.basePath = ApiPath;
}

})();