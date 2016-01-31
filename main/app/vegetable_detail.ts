/**
 * Created by Greg on 31.01.2016.
 */
import {FORM_DIRECTIVES,
    AbstractControl,
    FormBuilder,
    Validators,
    ControlGroup,
    Control} from 'angular2/common';
import {Component} from 'angular2/core';
import {Vegetable} from './vegetable';

@Component({
    selector: 'vegetable-detail',
    template: `
    <div *ngIf="vegetable">
      <h2>{{vegetable.text}} details!</h2>
      <div><label>Wykonanie: </label>{{vegetable.done}}</div>
      <div>
        <label>Zadanie: </label>
        <input [(ngModel)]="vegetable.text"  placeholder="Zadanie"/>
      </div>
    </div>
  `,
    inputs: ['vegetable']
})
export class VegetableDetail {
    public vegetable: Vegetable;
    myVal:AbstractControl;


}