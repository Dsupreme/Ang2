System.register(['angular2/core', "angular2-materialize"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_materialize_1;
    var reportCatalogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_materialize_1_1) {
                angular2_materialize_1 = angular2_materialize_1_1;
            }],
        execute: function() {
            reportCatalogComponent = (function () {
                function reportCatalogComponent() {
                }
                reportCatalogComponent = __decorate([
                    core_1.Component({
                        selector: 'reportCatalog',
                        directives: [angular2_materialize_1.MaterializeDirective],
                        templateUrl: 'app/masterpage/navbar/reportCatalog/reportCatalog.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], reportCatalogComponent);
                return reportCatalogComponent;
            }());
            exports_1("reportCatalogComponent", reportCatalogComponent);
        }
    }
});
//# sourceMappingURL=reportCatalog.js.map