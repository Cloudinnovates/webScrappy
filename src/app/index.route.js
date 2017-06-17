export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('report', {
      url: '/report',
      templateUrl: 'app/report-page/report.html',
      controller: 'ReportController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
