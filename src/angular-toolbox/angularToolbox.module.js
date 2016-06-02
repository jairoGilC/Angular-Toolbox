(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularToolbox.config', [])
      .value('angularToolbox.config', {
          debug: true
      });

  // Modules
  angular.module('angularToolbox.directives', []);
  angular.module('angularToolbox.filters', []);
  angular.module('angularToolbox.services', []);
  angular.module('angularToolbox',
      [
          'angularToolbox.config',
          'angularToolbox.directives',
          'angularToolbox.filters',
          'angularToolbox.services',
          'ngResource',
          'ngSanitize'
      ]);

})(angular);
