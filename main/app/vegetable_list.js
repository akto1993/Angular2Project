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
    var VegetableList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VegetableList = (function () {
                function VegetableList() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], VegetableList.prototype, "vegetables", void 0);
                VegetableList = __decorate([
                    core_1.Component({
                        selector: 'vegetable-list',
                        /*styles: [`
                        .done-true {
                          text-decoration: line-through;
                          color: grey;
                        }`
                        ],*/
                        template: "\n    <ul class=\"unstyled\">\n      <li *ngFor=\"#vegetable of vegetables\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n        <input type=\"checkbox\" [(ngModel)]=\"vegetable.done\">\n        <span class=\"done-{{vegetable.done}}\">{{vegetable.text}}</span>\n      </li>\n    </ul>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], VegetableList);
                return VegetableList;
            })();
            exports_1("VegetableList", VegetableList);
        }
    }
});
//# sourceMappingURL=vegetable_list.js.map