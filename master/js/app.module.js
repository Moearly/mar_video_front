(function() {
    'use strict';

    angular
        .module('front', [
            'app.core',
            'app.routes',
            'app.preloader',
            'app.utils',
            'app.lazyload',
            'app.colors',
            'app.loadingbar'
        ]);
})();