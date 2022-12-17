import { Component, OnInit } from "@angular/core";
import { formservice } from "../formservice.service";
import { Profile } from "../profile";
@Component({
	selector: 'gestion',
	templateUrl: './gestion.component.html',
	styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {
	profile!: Profile
	constructor(private profileService: formservice) { }

	ngOnInit() {
		this.profile = this.profileService.getProfile();
		this.profile = this.profile;
	}
}