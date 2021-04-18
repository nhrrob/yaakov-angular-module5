(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService', 'menuItems'];

function SignupController(MenuService, SignupService, menuItems) {
  var $ctrl = this;
  var shortNames = [];
  for (var i = 0; i < menuItems.menu_items.length; i++) {
    shortNames.push(menuItems.menu_items[i].short_name.toLowerCase() + "");
  }
  
  $ctrl.validateFavourite = function() {
    if ($ctrl.user != undefined && $ctrl.user.favourite != undefined) {
      var favourite = $ctrl.user.favourite.toLowerCase();
      if (shortNames.indexOf(favourite) != -1) {
        $ctrl.invalidItem = false;
      } else {
        $ctrl.invalidItem = true;
      }
    } else {
      $ctrl.invalidItem = true;
    }
  }

  $ctrl.submit = function() {
    MenuService.getMenuItemByShortName($ctrl.user.favourite).then(function(result) {
      $ctrl.invalidItem = false;
      $ctrl.user.favouriteMenuItem = result;
      SignupService.setUserData($ctrl.user);
      $ctrl.saved = true;
    }, function(error) {
      $ctrl.invalidItem = true;
      $ctrl.saved = false;
    });
  };
}

})();
