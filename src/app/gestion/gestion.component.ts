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
		  // La fonction de traitement des données est exécutée ici lorsqu'un nouvel élément est envoyé sur l'observable
		  console.log(this.profile); // Affiche les données reçues dans la console
		  this.profile = this.profile;
		  console.log(this.profile.email);
		  // Vous pouvez maintenant utiliser l'objet profile comme vous le souhaitez dans votre composant GestionComponent.

	  }
}