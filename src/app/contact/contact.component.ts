import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { max } from 'rxjs';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
	form: FormGroup;

	

	constructor() {
		this.form = new FormGroup({
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			age: new FormControl('', [Validators.required, Validators.min(13), Validators.max(120)]),
			hideEmail: new FormControl(false),
			email: new FormControl('', [Validators.email]),
			comment: new FormControl('')
		});
		
	}
	

	onSubmit() {
		console.log('Form submitted!');
		console.log(this.form.value);
	}

}
