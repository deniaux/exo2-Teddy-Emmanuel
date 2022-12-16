import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListComponent } from "./list/list.component";
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
	{ path: 'contact', component: ContactComponent },
	{ path: 'accueil', component: AccueilComponent },
	{ path: "", component: AccueilComponent },
	{ path: "gestion", component: GestionComponent },
	{
		path: "list",
		loadChildren: () => import('./list/list.module').then(module => module.ListModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
