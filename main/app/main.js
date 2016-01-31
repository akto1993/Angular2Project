System.register(['angular2/platform/browser', './vegetable_app'], function(exports_1) {
    var browser_1, vegetable_app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (vegetable_app_1_1) {
                vegetable_app_1 = vegetable_app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(vegetable_app_1.VegetableApp);
        }
    }
});
//# sourceMappingURL=main.js.map