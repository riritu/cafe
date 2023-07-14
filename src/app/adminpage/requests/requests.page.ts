import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  formDataList: any;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      this.formDataList = JSON.parse(storedFormData);
    }
  }
  
  clickBack () {
    this.navCtrl.back();
  }
  
}
