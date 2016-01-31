/**
 * Created by Greg on 31.01.2016.
 */
import {Component} from 'angular2/core';
import {Vegetable} from './vegetable';
import {VegetableForm} from './vegetable_form';
import {VegetableDetail} from './vegetable_detail';

@Component({
    selector: 'todo-app',
    template: `
    <h1>System "Cebula Polska"</h1>
    <h3>System organizacji dostaw na kieszeń każdego janusza</h3>
    <p>Do każdego zakupionego pakietu systemu "Cebula Polska" popularne klapki "KUBOTA" oraz białe skarpety gratis</p>
    <vegetable-form (newSupply)="addSupply($event)"></vegetable-form>
    <span>Do zrealizowania pzostało <b>{{remaining}}</b> dostaw(-y/-a).</span>
    [ <a (click)="recive()">Usuń odebrane dostawy z listy</a> ]

    <ul class="unstyled">
      <li *ngFor="#vegetable of vegetables" [class.selected]="vegetable === selectedVegetable">
        <input *ngIf="vegetable != selectedVegetable" type="checkbox" [(ngModel)]="vegetable.done">
        <span *ngIf="vegetable != selectedVegetable" class="done-{{vegetable.done}}">{{vegetable.text}}</span>
        <a *ngIf="vegetable != selectedVegetable" (click)="onSelect(vegetable)">Edytuj</a>
        <form *ngIf="vegetable === selectedVegetable" (ngSubmit)="selectedVegetable = null">
            <input type="text" [(ngModel)]="selectedVegetable.text" size="30"
                placeholder="Wpisz tu tytuł dostawy">
            <input class="btn-primary" type="submit" value="Zatwierdź">
        </form>
        <!--
        <input *ngIf="vegetable === selectedVegetable" type="text" [(ngModel)]="selectedVegetable.text" placeholder="Zadanie"/>
        <a *ngIf="vegetable === selectedVegetable" (click)="selectedVegetable = null">Zakończ edycje</a>
        -->
      </li>
    </ul>
    <!--<vegetable-detail [vegetable]="selectedVegetable"></vegetable-detail>-->
    `,
    styles:[`
    .done-true {
      text-decoration: line-through;
      color: grey;
    `],
    directives: [VegetableForm,VegetableDetail]
})
export class VegetableApp {
    public selectedVegetable: Vegetable;
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
    onSelect(selected: Vegetable) {
        this.selectedVegetable = selected;
    }
}
