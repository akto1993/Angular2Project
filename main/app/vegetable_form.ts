/**
 * Created by Greg on 31.01.2016.
 */
import {Component, Output, EventEmitter} from 'angular2/core';
import {Vegetable} from './vegetable';
@Component({
    selector: 'vegetable-form',
    template: `
    <form (ngSubmit)="addVegetable()">
      <input type="text" [(ngModel)]="supply" size="30"
             placeholder="Wpisz tu tytuł dostawy">
      <input class="btn-primary" type="submit" value="Dodaj">
    </form>`
})
export class VegetableForm {
    @Output() newSupply = new EventEmitter<Vegetable>();
    supply: string = '';
    addVegetable() {
        if (this.supply) {
            this.newSupply.next({text:this.supply, done:false});
        }
        this.supply = '';
    }
}