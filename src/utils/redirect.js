function redirectConfig() {

    var queryString = {},
        browserMovedToBackground = false;

    // Parse the query string so we can take individual query string params
    (function (search) {
        
        search = (search || '').split(/[\&\?]/g);
        for (var i = 0, count = search.length; i < count; i++) {
            if (!search[i]) continue;
            var pair = search[i].split('=');
            queryString[pair[0]] = queryString[pair[0]] !== undefined ?
                ([pair[1] || ''].concat(queryString[pair[0]])) : 
                (pair[1] || '');
        }
        
    })(window.location.search);

    // Listen to visibility change to prevent next url
    window.document.addEventListener("visibilitychange", function(e) {
        browserMovedToBackground = window.document.visibilityState === 'hidden' || window.document.visibilityState === 'unloaded';
    });
    window.addEventListener("blur", function(e) {
        browserMovedToBackground = true;
    });

    var AppRedirect = {
        /** 
         * @expose 
         * @public
         * */
        queryString: queryString,

        redirect: function (options) {

            var hasIos = !!(options.iosApp || options.iosAppStore);
            var hasAndroid = !!(options.android);
            var hasOverallFallback = !!(options.overallFallback);

            /**
            * Что происходит сейчас:
            * 1. Подбираем правильную платформу на основе userAgent:
            * 2. Пробуем открыть приложение по специальной схеме
            *
            *    └───> Если это удалось, мы вышли из браузера и перешли в приложение.
            *          *. Если пользователь на этом этапе вернется в браузер, он, к сожалению, будет перенаправлен на второй URL (AppStore и т. д.).
            *    └───> Если открыть приложение не удалось (схема не распознана), то:
            *          1. Будет показана ошибка
            *          2. Пользователь будет перенаправлен на второй URL.
            *          *.  Вернувшись в браузер позже, вы увидите ошибку.
            * 
            * Для Android все по-другому. Существует URL-адрес Intent://, который принимает аргумент «пакет» для возврата в Магазин. 
            * Но если вы хотите агрегировать аргументы для хранилища, вы можете использовать для этого «резервный» аргумент и указать URL-адрес магазина.
            * Аргументы QueryString будут автоматически агрегированы.
            */

            var tryToOpenInMultiplePhases = function(urls) {

                browserMovedToBackground = false;

                var currentIndex = 0;
                var redirectTime = new Date();
                window.location = urls[currentIndex++];

                var next = function () {
                    if (urls.length > currentIndex) {
                        setTimeout(function () {

                            if (browserMovedToBackground) {
                                console.log('Browser moved to the background, we assume that we are done here')
                                return;
                            }

                            if (new Date() - redirectTime > 3000) {
                                console.log('Enough time has passed, the app is probably open');
                            } else {
                                redirectTime = new Date();
                                window.location = urls[currentIndex++];
                                next();
                            }

                        }, 10);
                    }
                };

                next();

            };

            // var chromeVersion = /Chrome\/([0-9\.]+)/.test(navigator.userAgent) ? navigator.userAgent.match(/Chrome\/([0-9\.]+)/)[1] : '';

            if (hasIos && /iP(hone|ad|od)/.test(navigator.userAgent)) {

                var urls = [];
                if (options.iosApp) {
                    urls.push(options.iosApp);
                }
                if (options.iosAppStore) {
                    urls.push(options.iosAppStore);
                }
                tryToOpenInMultiplePhases(urls);

            } else if (hasAndroid && /Android/.test(navigator.userAgent)) {

                var intent = options.android;
                var intentUrl = 'intent://' + intent.host + '#Intent;' +
                            'scheme=' + encodeURIComponent(intent.scheme) + ';' + 
                            'package=' + encodeURIComponent(intent.package) + ';' + 
                            (intent.action ? 'action=' + encodeURIComponent(intent.action) + ';': '') + 
                            (intent.category ? 'category=' + encodeURIComponent(intent.category) + ';': '') + 
                            (intent.component ? 'component=' + encodeURIComponent(intent.component) + ';': '') + 
                            (intent.fallback ? 'S.browser_fallback_url=' + encodeURIComponent(intent.fallback) + ';': '') + 
                            'end';
                var anchor = document.createElement('a');
                document.body.appendChild(anchor);
                anchor.href = intentUrl;
                if (anchor.click) {
                    anchor.click();
                } else {
                    window.location = intentUrl;
                }

            } else if(hasOverallFallback) {
                window.location = options.overallFallback;
            } else {
                console.log('Unknown platform and no overallFallback URL, nothing to do');
            }

        }
    };

    /** @expose */
    //window.AppRedirect = AppRedirect;
    return AppRedirect;

};

export default redirectConfig;
