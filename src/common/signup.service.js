(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  var userData;

  service.setUserData = function(userData) {
    service.userData = userData;
  }

  service.getUserData = function() {
    return service.userData;
  }

}

})();
