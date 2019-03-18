(() => {
  const module_name = 'KaDo.routes.home';
  const dependencies = [];

  const module_instance = angular.module(module_name,dependencies);

  module_instance.config(['$stateProvider',($stateProvider) => {
    $stateProvider.state('root.home',{
      url : '/home',
      template : 'You are home',
    });
  }]);

  module.exports = module_name;
})();