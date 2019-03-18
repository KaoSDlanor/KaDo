(() => {
  const module_name = 'KaDo.core.init';
  const dependencies = [];

  const module_instance = angular.module(module_name,dependencies);

  module_instance.run(['$state',($state) => {
    $state.go('root.home');
  }]);

  module.exports = module_name;
})();