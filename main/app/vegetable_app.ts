/**
 * Created by Greg on 31.01.2016.
 */
import {Component} from 'angular2/core';
import {Vegetable} from './vegetable';
import {VegetableList} from './vegetable_list';
import {VegetableForm} from './vegetable_form';
@Component({
    selector: 'todo-app',
    template: `
    <h1>System "Cebula Polska"</h1>
    <h3>System organizacji dostaw na kieszeń każdego janusza</h3>
    <p>Do każdego zakupionego pakietu systemu "Cebula Polska" popularne klapki "KUBOTA" oraz białe skarpety gratis</p>

    <span>Pozostały <b>{{remaining}}</b> dostawy do odebrania.</span>
    [ <a (click)="recive()">Usuń odebrane dostawy z listy</a> ]

    <vegetable-list [vegetables]="vegetables"></vegetable-list>
    <vegetable-form (newSupply)="addSupply($event)"></vegetable-form>
    `,
    styles:['a { cursor: pointer; cursor: hand; }'],
    directives: [VegetableList, VegetableForm]
})
export class VegetableApp {
    vegetables: Vegetable[] = [
        {text:'odebrać cebule od Janka', done:true},
        {text:'odstarczyć cebule do Zbyszka', done:false},
        {text:'odstare do Zbyszka', done:false},
        {text:'odstarczyć cebule do ', done:false}
    ];
    get remaining() {
        return this.vegetables.reduce((count: number, remain: Vegetable) => count + +!remain.done, 0);
    }
    recive(): void {
        var oldVegetables = this.vegetables;
        this.vegetables = [];
        oldVegetables.forEach((supply: Vegetable) => {
            if (!supply.done) this.vegetables.push(supply);
        });
    }
    addSupply(supply: Vegetable) {
        this.vegetables.push(supply);
    }
}
