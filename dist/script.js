"use strict";angular.module("myApp").config(["$locationProvider","$routeProvider",function(e,i){e.hashPrefix("!"),i.when("/",{template:"<landing-page></landing-page>"}).otherwise("/")}]);
"use strict";angular.module("myApp",["ngRoute","landingPage","firstWidget"]);