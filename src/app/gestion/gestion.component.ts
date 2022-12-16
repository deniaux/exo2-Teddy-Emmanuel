import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
	selector: 'gestion',
	templateUrl: './gestion.component.html',
	styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
	form: {
		firstName: string | null;
		lastName: string | null;
		age: string | null;
		email: string | null;
		comment: string | null;
	} = {
			firstName: null,
			lastName: null,
			age: null,
			email: null,
			comment: null
		};

	constructor(private formDataService: FormserviceService) { }

	ngOnInit() {
		this.form = this.formDataService.getFormData();
	}
}
