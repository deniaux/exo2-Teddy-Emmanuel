import { Component } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent {
	selectedRoute!: string;
	films = [
		{ nom: "Avenger", route: "avenger", img: "./assets/afficheFilm/avenger.jpeg", description:"Avengers Tous publics 2012 ‧ Aventure/Action ‧ 2h 23m" },
		{ nom: "Titanic", route: "titanic", img: "./assets/afficheFilm/titanic.jpeg",description:"Titanic Tous publics 1997 ‧ Romance/Drame ‧ 3h 14m" },
		{ nom: "La ligne verte", route: "laligneverte", img: "./assets/afficheFilm/llv.jpg",description:"La ligne verte Tous publics 1999 ‧ Drame/Fantastique ‧ 2h22m" },
		{ nom: "Star Wars III", route: "starwarsiii",img: "./assets/afficheFilm/swiii.jpeg",description:"Star Wars, épisode III : La Revanche des Sith Tous publics 2005 ‧ SF/Action ‧ 2h 20m" },
		{ nom: "Retour vers le futur", route: "retourverslefutur",img: "./assets/afficheFilm/rvlf.jpeg",description:"Retour vers le futur. Tous publics 1985 ‧ SF/Comédie ‧ 1h 56m" },
	];
	
}
