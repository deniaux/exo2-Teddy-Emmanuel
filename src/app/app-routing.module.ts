import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListComponent } from "./list/list.component";
import { GestionComponent } from './gestion/gestion.component';
import { ChargementService } from './chargement.service';
const routes: Routes = [
	{ path: 'contact', component: ContactComponent },
	{ path: 'accueil', component: AccueilComponent },
	{ path: "", component: AccueilComponent },
	{ path: "gestion", component: GestionComponent },
	{ path: "list", component: ListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	RouterModule.forRoot(routes, { preloadingStrategy: ChargementService })],
	exports: [RouterModule],
})
export class AppRoutingModule { }
