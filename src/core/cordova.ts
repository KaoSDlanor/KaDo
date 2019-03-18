(() => {
  const module_name = 'KaDo.core.cordova';
  const dependencies = [];

  const module_instance = angular.module(module_name,dependencies);

  const deviceready = new Promise((resolve) => document.addEventListener('deviceready',resolve,false));
  
  module_instance.value('deviceready',deviceready);
  module_instance.run(['$rootScope',($rootScope) => {
    $rootScope.deviceready = false;
    deviceready.then(() => {
      console.log('Device Ready');
      $rootScope.deviceready = true;
      $rootScope.$digest();
    });
  }]);

  module.exports = module_name;
})();