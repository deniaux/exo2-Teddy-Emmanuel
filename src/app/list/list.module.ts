import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { RetourverslefuturComponent } from './retourverslefutur/retourverslefutur.component';
import { TitanicComponent } from './titanic/titanic.component';
import { LaligneverteComponent } from './laligneverte/laligneverte.component';
import { StarwarsIIIComponent } from './starwars-iii/starwars-iii.component';
import { AvengerComponent } from './avenger/avenger.component';
import { ChargementService } from '../chargement.service';


const routes: Routes = [
	{
	  path: '', component: ListComponent,
	  children: [
		{ path: 'retourverslefutur', component: RetourverslefuturComponent, data: { preload: true } },
		{ path: 'avenger', component: AvengerComponent, data: { preload: true } },
		{ path: 'starwarsiii', component: StarwarsIIIComponent, data: { preload: true } },
		{ path: 'laligneverte', component: LaligneverteComponent, data: { preload: true } },
		{ path: 'titanic', component: TitanicComponent, data: { preload: true } }
	  ]
	},
  ];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [
		TitanicComponent,
		LaligneverteComponent,
		StarwarsIIIComponent,
		AvengerComponent
	],
	providers:[ChargementService]
})
export class ListModule { }
