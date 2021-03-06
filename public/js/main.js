require.config({
    paths: {
        "angular": "./lib/angular.min",
        "angular-route": "./lib/angular-route.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            exports: "angular-route"
        }
    },
    deps: ["./app/bootstrap"]

});
