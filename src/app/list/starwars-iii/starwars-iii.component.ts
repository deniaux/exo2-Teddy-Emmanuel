import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-starwars-iii',
	templateUrl: './starwars-iii.component.html',
	styleUrls: ['./starwars-iii.component.scss']
})
export class StarwarsIIIComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit() {
		this.router.navigate(['/list/retourverslefutur']).then(() => {
			const route: Route | undefined = this.router.config.find(r => r.path === 'retourverslefutur');
			if (route) {
				console.log(`Route configuration for path 'retourverslefutur' is ${route.routeConfig ? 'loaded' : 'not loaded'}.`);
			} else {
				console.log(`Route configuration for path 'retourverslefutur' was not found.`);
			}
		});
	}
}

