import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { RetourverslefuturComponent } from './retourverslefutur/retourverslefutur.component';
import { TitanicComponent } from './titanic/titanic.component';
import { LaligneverteComponent } from './laligneverte/laligneverte.component';
import { StarwarsIIIComponent } from './starwars-iii/starwars-iii.component';
import { AvengerComponent } from './avenger/avenger.component';


const routes: Routes = [
	{ path: '', component: ListComponent, 
		children:[	{ path: 'retourverslefutur', component: RetourverslefuturComponent },
					{ path: 'avenger', component: AvengerComponent},
					{ path: 'starwarsiii' , component: StarwarsIIIComponent},
					{ path: 'laligneverte', component: LaligneverteComponent},
					{ path: 'titanic', component: TitanicComponent}
]},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [
   TitanicComponent,
   LaligneverteComponent,
   StarwarsIIIComponent,
   AvengerComponent
	]
  })
export class ListModule { }
