import {Component} from 'angular2/core';
import {FORM_DIRECTIVES,
    AbstractControl,
    FormBuilder,
    Validators,
    ControlGroup,
    Control} from 'angular2/common';


@Component({
    selector: 'my-form',
    directives: [FORM_DIRECTIVES],
    template: `
    <form [ngFormModel]="myForm" (ngSubmit)="mySubmit(myForm.value)">
    <input type="text" [ngFormControl]="myVal">
    <div *ngIf="myVal.hasError('required')">Value required</div>
    <div *ngIf="myVal.hasError('bolekVal')">Bolek denied</div>
    <button type="submit">Submit</button>
    </form>
    `
})
export class AppComponent {

    myForm:ControlGroup;
    myVal:AbstractControl;

    constructor(fb:FormBuilder) {
        this.myForm = fb.group({
            'myVal': ['Bolek', Validators.compose([
                Validators.required, this.myValValidator])
            ]
        });

        this.myVal = this.myForm.controls['myVal'];

        this.myVal.valueChanges.subscribe(
            (value:string) => {
                console.log(' Value changed: ', value);
            }
        );

        this.myForm.valueChanges.subscribe(
            (value:string) => {
                console.log(' Form changed changed: ', value);
            }
        );
    }

    mySubmit(value:string):void {
        console.log("Submitted value: ", JSON.stringify(value));
    }

    myValValidator(control:Control) {
        if (control.value.match(/^Bol/i)) {
            return {"bolekVal": true}
        }
    }
}



