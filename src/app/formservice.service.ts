import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FormserviceService {
	private formData: {
		firstName: string | null;
		lastName: string | null;
		age: string | null;
		email: string | null;
		comment: string | null;
	} = {
			firstName: '',
			lastName: '',
			age: '',
			email: '',
			comment: '',
		};

	getFormData(): {
		firstName: string | null;
		lastName: string | null;
		age: string | null;
		email: string | null;
		comment: string | null;
	} {
		return this.formData;
	}

	setFormData(formData: {
		firstName: string | null;
		lastName: string | null;
		age: string | null;
		email: string | null;
		comment: string | null;
	}) {
		this.formData = formData;
	}

	constructor() { }
}
