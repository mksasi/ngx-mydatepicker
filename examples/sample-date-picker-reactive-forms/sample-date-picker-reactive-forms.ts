import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {INgxMyDpOptions} from '../../projects/ngx-mydatepicker/src/lib/interfaces';

@Component({
    selector: 'sample-date-picker-reactive-forms',
    styleUrls: ['./sample-date-picker-reactive-forms.css'],
    templateUrl: './sample-date-picker-reactive-forms.html'
})

export class SampleDatePickerReacticeForms implements OnInit {
	private myDatePickerOptions: INgxMyDpOptions = {
        dateFormat: 'dd.mm.yyyy'
    };

	private disabled: boolean = false;

    private myForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        console.log('onInit(): SampleDatePickerReacticeForms');
        let d: Date = new Date();
        this.myForm = this.formBuilder.group({
            //myDate: [null, Validators.required]   // not initial date set
            //myDate: [{jsdate: new Date()}, Validators.required] // initialized todat with jsdate property
            myDate: [{date: {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}}, Validators.required]   // this example is initialized to specific date

        });
    }

    onSubmitReactiveForms(): void {
        console.log('Value: ', this.myForm.controls['myDate'].value, ' - Valid: ', this.myForm.controls['myDate'].valid, ' - Dirty: ', this.myForm.controls['myDate'].dirty);
    }

    setDate(): void {
        // Set today using the setValue function
        let date: Date = new Date();
        this.myForm.setValue({myDate: {date: {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}}});
    }

    resetDate(): void {
        // Reset date picker to specific date (today)
        let date: Date = new Date();
        this.myForm.reset({myDate: {date: {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}}});
    }

    clearDate(): void {
        // Clear the date using the setValue function
        this.myForm.setValue({myDate: null});
    }

	disable(): void {
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.myForm.get('myDate').disable();
        }
        else {
            this.myForm.get('myDate').enable();
        }
	}
}
