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
import { formservice } from './form.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion/gestion.component';
import { RouterModule } from '@angular/router';


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
		CommonModule,
		RouterModule
	],
	providers: [formservice],
	bootstrap: [AppComponent]
})
export class AppModule { }
