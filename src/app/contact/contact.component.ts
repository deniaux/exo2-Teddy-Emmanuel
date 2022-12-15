import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-dynamic-form',
  template: `
  <style>
  form {
	width: 50%;
	margin: auto;
	padding: 1em;
	border: 1px solid #ccc;
	border-radius: 5px;
  }

  div {
	margin: 0.5em 0;
  }

  label {
	display: inline-block;
	width: 120px;
	text-align: right;
	padding-right: 1em;
	font-weight: bold;
  }

  input, textarea {
	box-sizing: border-box;
	width: 100%;
	padding: 0.5em;
	border: 1px solid #ccc;
	border-radius: 3px;
  }

  button {
	display: block;
	margin: auto;
	padding: 0.5em 1em;
	border: none;
	border-radius: 3px;
	background-color: #0070f3;
	color: #fff;
	cursor: pointer;
  }

  button[disabled] {
	opacity: 0.5;
	cursor: default;
  }
</style>
<form [formGroup]="form" (ngSubmit)="onSubmit()">

	<div>
	<label>First Name:</label>
	<input type="text" formControlName="firstName" required>
	</div>

	<div>
		<label>Last Name:</label>
		<input type="text" formControlName="lastName" required>
	</div>

	<div>
		<label>Age:</label>
		<input type="number" min="0" max="120" formControlName="age" required>
	</div>

	<div>
		<label>Hide:</label>
		<input type="checkbox" (change)="onCheckboxChange($event)">
				</div>

	<div *ngIf="!hideEmail">
		<label>Email:</label>
		<input type="email" formControlName="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
	</div>
  
	<div>
        <label>Comment:</label>
        <textarea formControlName="comment"></textarea>
	</div>

      <button type="submit" [disabled]="!form.valid">Submit</button>
	</form>    
  `
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
	// Récupérer l'objet HTMLInputElement associé à la checkbox à partir de l'objet event.target
	const inputElement = event.target as HTMLInputElement;
  
	// Récupérer l'état de la checkbox à partir de l'objet inputElement
	const checked = inputElement ? inputElement.checked : false;
  
	// Mettre à jour la valeur de hideEmail en fonction de l'état de la checkbox
	this.hideEmail = checked;

  }

  
}
