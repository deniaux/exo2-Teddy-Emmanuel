import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  form: {
    firstName: string | null;
    lastName: string | null;
    age: string | null;
    email: string | null;
    comment: string | null;
  } = {
    firstName: null,
    lastName: null,
    age: null,
    email: null,
    comment: null
  };

  constructor(private formDataService: FormserviceService) {}

  ngOnInit() {
    this.form = this.formDataService.getFormData();
  }

  showFormData() {
    // Code pour afficher les données du formulaire
  }
}
