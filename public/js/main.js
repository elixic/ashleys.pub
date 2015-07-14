require.config({
    paths: {
        "angular": "./lib/angular.min",
        "angular-route": "./lib/angular-route.min",
        "bootstrap": "./lib/bootstrap.min",
        "jquery": "./lib/jquery-1.10.2.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            exports: "angular-route"
        },
        "bootstrap": {
            "deps": ["jquery"]
        }
    },
    deps: ["./app/bootstrap"]

});
