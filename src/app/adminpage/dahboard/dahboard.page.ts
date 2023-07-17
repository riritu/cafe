import { Component, OnInit } from '@angular/core';

export interface FormData {
  name: string;
  unit: string;
  ids: string;
  date: string;
}

export interface Tenant {
  lname: string;
  fname: string;
  mname: string;
  email: string;
  phone: string;
  unit: string;
  ids: string;
  user: string;
  pass: string;

}

@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.page.html',
  styleUrls: ['./dahboard.page.scss'],
})
export class DahboardPage implements OnInit {
  accDataList: Tenant[] = [];
  formDataList: FormData[] = []; // Initialize formDataList as an empty array
  constructor() { }

  ngOnInit() {
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      this.formDataList = JSON.parse(storedFormData);
      console.log(this.formDataList);
    }
    const storedFormDatab = localStorage.getItem('tenants');
    if (storedFormDatab) {
      this.accDataList = JSON.parse(storedFormDatab);
      console.log(this.accDataList);
    }
  }

}
