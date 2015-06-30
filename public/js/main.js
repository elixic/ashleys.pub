require.config({
    paths: {
        "angular": "js/lib/angular.min",
        "angular-route": "js/lib/angular-router.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            exports: "angular-route"
        }
    },
    deps: ["js/app/bootstrap"]

});
