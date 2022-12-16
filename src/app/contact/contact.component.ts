import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Profile } from '../profile';
import { formservice } from '../formservice.service';


@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
	form: FormGroup;
	service!: formservice;

	constructor(private fb: FormBuilder, private formservice: formservice) {

		this.form = new FormGroup({
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			age: new FormControl('', [Validators.required, Validators.min(13), Validators.max(120)]),
			hideEmail: new FormControl(false),
			email: new FormControl('', [Validators.required, Validators.email]),
			comment: new FormControl('')
		});
		this.form.get('hideEmail')?.valueChanges!.subscribe(hideEmail => {
			if (hideEmail) {
				this.form.get('email')!.disable();
			} else {
				this.form.get('email')!.enable();
			}
		});

	}


	onSubmit() {
		console.log("test");
		const profile = new Profile();
		profile.prenom = this.form.get('firstName')!.value;
		profile.nom = this.form.get('lastName')!.value;
		profile.age = this.form.get('age')!.value;
		if (this.form.get('hideEmail')?.value == false) profile.email = this.form.get('email')!.value;
		profile.commentaire = this.form.get('comment')!.value
		console.log(this.form.get('hideEmail')?.value);
		this.formservice.sendProfile(profile);
	}





}

