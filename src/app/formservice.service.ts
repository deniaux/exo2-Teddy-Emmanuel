import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Profile } from './profile';

@Injectable({
	providedIn: 'root'
})
export class formservice {
	private profilToSend = new Profile;

	sendProfile(ProfileReceived: Profile) {
		this.profilToSend = ProfileReceived;
	}


	getProfile() {
		return this.profilToSend;
	}
}






