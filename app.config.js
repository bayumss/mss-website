app.config(config);

function config($stateProvider, jwtOptionsProvider, lockPasswordlessProvider, $urlRouterProvider, $locationProvider, $httpProvider, NotificationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'components/home/home.html'
        })
        .state('who-we-are', {
            url: '/who-we-are',
            controller: 'WhoWeAreController',
            templateUrl: 'components/who-we-are/who-we-are.html'
        })
        .state('vision-values', {
            url: '/vision-values',
            controller: 'VisionController',
            templateUrl: 'components/vision-values/vision-values.html'
        })
        .state('our-clients', {
            url: '/our_clients',
            controller: 'OurClientsController',
            templateUrl: 'components/our-clients/our-clients.html'
        })
        .state('client-speaks', {
            url: '/client-speaks',
            controller: 'SpeaksController',
            templateUrl: 'components/client-speaks/client-speaks.html'
        })
        .state('solutions', {
            url: '/solutions',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/solutions.html'
        })
        .state('software-development', {
            url: '/software-development',
            controller: 'SoftwareDevController',
            templateUrl: '/components/software-development/software-development.html'
        })
        .state('software-development-order', {
            url: '/software-development-order',
            controller: 'QuotationController',
            templateUrl: 'components/quotation/quotation.html'
        })
        .state('it-infrastructure', {
            url: '/it-infrastructure',
            controller: 'ItInfrastructureController',
            templateUrl: 'components/it-infrastructure/it-infrastructure.html'
        })
        .state('it-infrastructure-order', {
            url: '/it-infrastructure-order',
            controller: 'ItinfrastructureorderController',
            templateUrl: 'components/it-infrastructure-order/it-infrastructure-order.html'
        })
        .state('software', {
            url: '/retail-software',
            controller: 'SoftwaresController',
            templateUrl: 'components/softwares/softwares.html'
        })
        .state('hardware', {
            url: '/retail-hardware',
            controller: 'HardwaresController',
            templateUrl: 'components/hardwares/hardwares.html'
        })
        .state('hardware-detail', {
            url: '/hardware-detail',
            controller: 'HardwareDtlController',
            templateUrl: 'components/hardwares/hardware-detail.html'
        })
        .state('portfolio', {
            url: '/portfolio',
            controller: 'PortfolioController',
            templateUrl: 'components/portfolio/portfolio.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'components/contact/contact.html'
        })
        .state('knowledge-base', {
            url: '/knowledge-base',
            controller: 'KnowledgeBaseController',
            templateUrl: 'components/knowledge-base/knowledge-base.html'
        })
        // User routes
        .state('account', {
            url: '/account',
            controller: 'AccountController',
            templateUrl: 'components/account/account.html'
        })
        .state('profile', {
            url: '/profile',
            controller: 'ProfileController',
            templateUrl: 'components/account/profile.html'
        })
        .state('service', {
            url: '/service',
            controller: 'ServiceController',
            templateUrl: 'components/account/service.html'
        })
        .state('order', {
            url: '/order',
            controller: 'OrderController',
            templateUrl: 'components/account/order.html'
        })
        .state('billing', {
            url: '/billing',
            controller: 'BillingController',
            templateUrl: 'components/account/billing.html'
        })
        .state('transaction', {
            url: '/transaction',
            controller: 'TransactionController',
            templateUrl: 'components/account/transaction.html'
        })
        .state('support', {
            url: '/support',
            controller: 'SupportController',
            templateUrl: 'components/account/support.html'
        })
        .state('setting', {
            url: '/setting',
            controller: 'SettingController',
            templateUrl: 'components/account/setting.html'
        });

    // Lock passwordless
    lockPasswordlessProvider.init({
        clientID: AUTH0_CLIENT_ID,
        domain: AUTH0_DOMAIN
    });

    // Configuration for angular-jwt
    jwtOptionsProvider.config({
        tokenGetter: ['options', function(options) {
            if (options && options.url.substr(options.url.length - 5) == '.html') {
                return null;
            }
            return localStorage.getItem('id_token');
        }],
        whiteListedDomains: ['localhost', '127.0.0.1']
    });

    // Http method PATCH
    $httpProvider.defaults.headers.patch = {
        'Content-Type': 'application/json;charset=utf-8'
    };

    // Intercept the HTTP calls
    $httpProvider.interceptors.push('allHttpInterceptor');
    // $httpProvider.interceptors.push('jwtInterceptor');

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    // UI Notification
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
}