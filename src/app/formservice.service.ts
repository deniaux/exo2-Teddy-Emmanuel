import { Injectable } from '@angular/core';
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






