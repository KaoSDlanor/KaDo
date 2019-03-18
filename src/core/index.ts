(() => {
  const module_name = 'KaDo.core';
  const dependencies = [
    require('./cordova'),
    require('./debug'),
    require('./init'),
  ];

  const module_instance = angular.module(module_name,dependencies);

  module.exports = module_name;
})();