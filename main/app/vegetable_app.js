System.register(['angular2/core', './vegetable_list', './vegetable_form'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vegetable_list_1, vegetable_form_1;
    var VegetableApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vegetable_list_1_1) {
                vegetable_list_1 = vegetable_list_1_1;
            },
            function (vegetable_form_1_1) {
                vegetable_form_1 = vegetable_form_1_1;
            }],
        execute: function() {
            VegetableApp = (function () {
                function VegetableApp() {
                    this.vegetables = [
                        { text: 'odebrać cebule od Janka', done: true },
                        { text: 'odstarczyć cebule do Zbyszka', done: false },
                        { text: 'odstare do Zbyszka', done: false },
                        { text: 'odstarczyć cebule do ', done: false }
                    ];
                }
                Object.defineProperty(VegetableApp.prototype, "remaining", {
                    get: function () {
                        return this.vegetables.reduce(function (count, remain) { return count + +!remain.done; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                VegetableApp.prototype.recive = function () {
                    var _this = this;
                    var oldVegetables = this.vegetables;
                    this.vegetables = [];
                    oldVegetables.forEach(function (supply) {
                        if (!supply.done)
                            _this.vegetables.push(supply);
                    });
                };
                VegetableApp.prototype.addSupply = function (supply) {
                    this.vegetables.push(supply);
                };
                VegetableApp = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        template: "\n    <h1>System \"Cebula Polska\"</h1>\n    <h3>System organizacji dostaw na kiesze\u0144 ka\u017Cdego janusza</h3>\n    <p>Do ka\u017Cdego zakupionego pakietu systemu \"Cebula Polska\" popularne klapki \"KUBOTA\" oraz bia\u0142e skarpety gratis</p>\n\n    <span>Pozosta\u0142y <b>{{remaining}}</b> dostawy do odebrania.</span>\n    [ <a (click)=\"recive()\">Usu\u0144 odebrane dostawy z listy</a> ]\n\n    <vegetable-list [vegetables]=\"vegetables\"></vegetable-list>\n    <vegetable-form (newSupply)=\"addSupply($event)\"></vegetable-form>\n    ",
                        styles: ['a { cursor: pointer; cursor: hand; }'],
                        directives: [vegetable_list_1.VegetableList, vegetable_form_1.VegetableForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VegetableApp);
                return VegetableApp;
            })();
            exports_1("VegetableApp", VegetableApp);
        }
    }
});
//# sourceMappingURL=vegetable_app.js.map