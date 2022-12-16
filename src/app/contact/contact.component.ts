import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],

})

export class ContactComponent {
	hideEmail = false;
	formSubmitted = false;
	form = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		age: new FormControl(''),
		email: new FormControl(''),
		comment: new FormControl('')

	});
	
	constructor(private formDataService: FormserviceService) {
		console.log('La valeur de hideEmail est :', this.hideEmail);
	}
	onSubmit() {
		this.formDataService.setFormData(this.form.getRawValue());
	}
	showFormData() {
		this.formSubmitted = true;
	}


	onCheckboxChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		const checked = inputElement ? inputElement.checked : false;
		this.hideEmail = checked;
	}


}
