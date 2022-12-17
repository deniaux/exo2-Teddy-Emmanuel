import { Component } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	films = [
		{ nom: "Avenger", route: "avenger" },
		{ nom: "Titanic", route: "titanic" },
		{ nom: "La ligne verte", route: "laligneverte" },
		{ nom: "Star Wars III", route: "starwarsiii" },
		{ nom: "Retour vers le futur", route: "retourverslefutur" },
	];
	
}
