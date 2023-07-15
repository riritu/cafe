import { Component, OnInit } from '@angular/core';

export interface FormData {
  name: string;
  unit: string;
  ids: string;
  date: string;
}

@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.page.html',
  styleUrls: ['./dahboard.page.scss'],
})
export class DahboardPage implements OnInit {

  formDataList: FormData[] = []; // Initialize formDataList as an empty array
  constructor() { }

  ngOnInit() {
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      this.formDataList = JSON.parse(storedFormData);
      console.log(this.formDataList);
    }
  }

}
