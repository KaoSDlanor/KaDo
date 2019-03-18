require('angular');
require('angular-ui-router');
require('./styles.css');

(() => {
  const module_name = 'KaDo';
  const dependencies = [
    'ui.router',
    require('./components'),
    require('./controllers'),
    require('./core'),
    require('./routes'),
    require('./services'),
  ];

  const module_instance = angular.module(module_name,dependencies);

  module.exports = module_name;
})();