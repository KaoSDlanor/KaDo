(() => {
  const module_name = 'KaDo.core.debug';
  const dependencies = [];

  const module_instance = angular.module(module_name,dependencies);

  module_instance.run(['$injector',($injector) => {
    Object.assign(window,{$injector});
  }]);

  module.exports = module_name;
})();