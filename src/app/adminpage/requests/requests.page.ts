import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface FormData {
  name: string;
  unit: string;
  ids: string;
  date: string;
}


@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  formDataList: FormData[] = []; // Initialize formDataList as an empty array
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      this.formDataList = JSON.parse(storedFormData);
      console.log(this.formDataList);
    }
  }
  
  clickBack () {
    this.navCtrl.back();
  }
  
  goToReqDetails(id: string) {
    this.navCtrl.navigateForward(['/reqdetails', id]);
  }

}
