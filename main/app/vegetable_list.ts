/**
 * Created by Greg on 31.01.2016.
 */
import {Component, Input} from 'angular2/core';
import {Vegetable} from './vegetable';
@Component({
    selector: 'vegetable-list',
    /*styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],*/
    template: `
    <ul class="unstyled">
      <li *ngFor="#vegetable of vegetables">
        <input type="checkbox" [(ngModel)]="vegetable.done">
        <span class="done-{{vegetable.done}}">{{vegetable.text}}</span>
      </li>
    </ul>`
})
export class VegetableList {
    @Input() vegetables: Vegetable[];
}
