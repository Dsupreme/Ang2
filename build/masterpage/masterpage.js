System.register(['angular2/core', './navbar/navbar.js'], function(exports_1, context_1) {
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
    var core_1, navbar_js_1;
    var masterpage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_js_1_1) {
                navbar_js_1 = navbar_js_1_1;
            }],
        execute: function() {
            masterpage = (function () {
                function masterpage() {
                }
                masterpage = __decorate([
                    core_1.Component({
                        selector: 'masterpage',
                        directives: [navbar_js_1.navbarComponent],
                        templateUrl: 'app/masterpage/masterpage.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], masterpage);
                return masterpage;
            }());
            exports_1("masterpage", masterpage);
        }
    }
});
//# sourceMappingURL=masterpage.js.map