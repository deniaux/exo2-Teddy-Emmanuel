import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListComponent } from './list/list.component';
import { GestionComponent } from './gestion/gestion.component';
import { FormserviceService } from './formservice.service';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ContactComponent,
		AccueilComponent,
		ListComponent,
		GestionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
	],
	providers: [FormserviceService],
	bootstrap: [AppComponent]
})
export class AppModule { }
