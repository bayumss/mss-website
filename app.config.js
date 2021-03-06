app.config(config);

function config($stateProvider, jwtOptionsProvider, lockPasswordlessProvider, $urlRouterProvider, $locationProvider, $httpProvider, NotificationProvider, AnalyticsProvider) {
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
        //SOLUTION ROUTES
        .state('business-email', {
            url: '/business-email',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/business-email.html'
        })
        .state('survey-tool', {
            url: '/survey-tool',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/survey-tools.html'
        })
        .state('live-ticker', {
            url: '/live-ticker',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/live-ticker.html'
        })
        .state('email-migration', {
            url: '/email-migration',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/email-migration.html'
        })
        .state('acronis-backup', {
            url: '/acronis-backup',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/acronis-backup.html'
        })
        .state('maintenance-service', {
            url: '/maintenance-service',
            controller: 'SolutionsController',
            templateUrl: 'components/solutions/maintenance-service.html'
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
        .state('company-profile-form', {
            url: '/company-profile-form',
            controller: 'CompanyProfileController',
            templateUrl: 'components/quotation/company-profile.html'
        })
        .state('webapp', {
            url: '/webapp',
            controller: 'QuotationController',
            templateUrl: 'components/software-development/webapp.html'
        })
        .state('mobile-app', {
            url: '/mobile-app',
            controller: 'SoftwareDevController',
            templateUrl: 'components/software-development/mobile-app.html'
        })
        .state('e-commerce', {
            url: '/e-commerce',
            controller: 'SoftwareDevController',
            templateUrl: 'components/software-development/e-commerce.html'
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
        //INFRASTRUCTURE ROUTES
        .state('security', {
            url: '/security',
            controller: 'ItInfrastructureController',
            templateUrl: 'components/it-infrastructure/security.html'
        })
        .state('telephone', {
            url: '/telephone',
            controller: 'ItInfrastructureController',
            templateUrl: 'components/it-infrastructure/telephone.html'
        })
        .state('network', {
            url: '/network',
            controller: 'ItInfrastructureController',
            templateUrl: 'components/it-infrastructure/network.html'
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
        // PRODUCTS Routes
        .state('software', {
            url: '/products-software',
            controller: 'SoftwaresController',
            templateUrl: 'components/products/softwares.html'
        })
        .state('hardware', {
            url: '/products-hardware',
            controller: 'HardwaresController',
            templateUrl: 'components/products/hardwares.html'
        })
        // DOWNLOAD ROUTES
        .state('download', {
            url: '/download',
            controller: 'DownloadController',
            templateUrl: 'components/download/main.html'
        })
        // HELP Routes
        .state('contact', {
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'components/help/contact.html'
        })
        .state('knowledge-base', {
            url: '/knowledge-base',
            controller: 'KnowledgeBaseController',
            templateUrl: 'components/help/knowledge-base.html'
        })
        .state('term-use', {
            url: '/term-use',
            templateUrl: 'components/help/term-use.html'
        })
        .state('cookies-policy', {
            url: '/cookies-policy',
            templateUrl: 'components/help/cookies-policy.html'
        })
        .state('privacy-policy', {
            url: '/privacy-policy',
            templateUrl: 'components/help/privacy-policy.html'
        })
        // ACCOUNT routes
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

    // Google Analytics
    AnalyticsProvider
        .logAllCalls(true)
        .startOffline(true)
        .useECommerce(true, true);
    AnalyticsProvider.setAccount('UA-93159229-1');

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

    $locationProvider.hashPrefix('');

    // $locationProvider.html5Mode(true);
}

app.config(function (imgEngConfigProvider) {
       imgEngConfigProvider.setToken('kpzc');
       imgEngConfigProvider.isLite(); // Add this line only for ImageEngine Lite
    });
