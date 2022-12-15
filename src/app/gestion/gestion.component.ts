import { Component, OnInit  } from '@angular/core';
import { FormserviceService } from '../formservice.service';
import { Object } from 'ts-toolbelt';

@Component({
	selector: 'gestion',
	template: `
	<div name="mainDiv">
		<div *ngIf="form.firstName != ''">
			<p>Prénom : {{ form.firstName }}</p>
			<p>Nom : {{ form.lastName }}</p>
			<p>Age : {{ form.age }}</p>
			<p>Email : {{ form.email }}</p>
			<p>Commentaire : {{ form.comment }}</p>
		</div>
		<div *ngIf="form.firstName == ''">
			<h1>Erreur 404</h1>
			<p>Aucun formulaire de contact trouvé.</p>
		</div>
	</div>
	<style>
	.form-group {
		padding: 20px;
		background-color: #0069C0;
		color: #fff;
	  }
	
	  div {
		text-align: center;
		
	}
	  
	  .form-control-plaintext {
		margin-bottom: 20px;
	  }
	  
	  .alert {
		padding: 20px;
		margin-top: 20px;
	  }
	  
	  .alert-danger {
		background-color: #D32F2F;
		color: #fff;
	  }
	  
	</style>
	`,
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
	  
	  
	  
	constructor(private formDataService: FormserviceService) {}
  
	ngOnInit() {
	  this.form = this.formDataService.getFormData();
	}
  }
  