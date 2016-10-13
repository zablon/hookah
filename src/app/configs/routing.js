export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state(require('../pages/home'))
        .state(require('../pages/add.size'))
        .state(require('../pages/add.liquid'))
        .state(require('../pages/add.tabacco'));

    $locationProvider.html5Mode(true)
}

