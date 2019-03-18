(() => {
  const module_name = 'KaDo.routes';
  const dependencies = [
    require('./home'),
  ];

  const module_instance = angular.module(module_name,dependencies);

  module_instance.config(['$stateProvider',($stateProvider) => {
    $stateProvider.state('root',{
      abstract : true,
    });
  }]);

  module.exports = module_name;
})();