import { Component, OnInit  } from '@angular/core';
import { FormserviceService } from '../formservice.service';
@Component({
	selector: 'gestion',
	template: `
	<div *ngIf="form">
	  <p>Prénom : {{ form.firstName }}</p>
	  <p>Nom : {{ form.lastName }}</p>
	  <p>Age : {{ form.age }}</p>
	  <p>Email : {{ form.email }}</p>
	  <p>Commentaire : {{ form.comment }}</p>
	</div>
	<div *ngIf="!form">
	  <h1>Erreur 404</h1>
	  <p>Aucun formulaire de contact trouvé.</p>
	</div>
	`,
  })
  export class GestionComponent implements OnInit {
	form: {
		firstName: string | null;
		lastName: string | null;
		age: string | null;
		email: string | null;
		comment: string | null;
	  }= {
		firstName: null,
		lastName: null,
		age: null,
		email: null,
		comment: null
	  };;
	  
	  
	constructor(private formDataService: FormserviceService) {}
  
	ngOnInit() {
	  this.form = this.formDataService.getFormData();
	}
  }
  