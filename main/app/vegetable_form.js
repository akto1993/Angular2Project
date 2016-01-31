System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VegetableForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VegetableForm = (function () {
                function VegetableForm() {
                    this.newSupply = new core_1.EventEmitter();
                    this.supply = '';
                }
                VegetableForm.prototype.addVegetable = function () {
                    if (this.supply) {
                        this.newSupply.next({ text: this.supply, done: false });
                    }
                    this.supply = '';
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VegetableForm.prototype, "newSupply", void 0);
                VegetableForm = __decorate([
                    core_1.Component({
                        selector: 'vegetable-form',
                        template: "\n    <form (ngSubmit)=\"addVegetable()\">\n      <input type=\"text\" [(ngModel)]=\"supply\" size=\"30\"\n             placeholder=\"Wpisz tu tytu\u0142 dostawy\">\n      <input class=\"btn-primary\" type=\"submit\" value=\"Dodaj\">\n    </form>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], VegetableForm);
                return VegetableForm;
            })();
            exports_1("VegetableForm", VegetableForm);
        }
    }
});
//# sourceMappingURL=vegetable_form.js.map