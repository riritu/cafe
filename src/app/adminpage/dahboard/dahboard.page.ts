import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

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
  formDataList: FormData[] = []; 

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

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
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'You want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          
        },
        {
          text: 'OK',
          role: 'confirm',
          
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    if (role === 'confirm') {
      this.navCtrl.navigateBack('/login');
    } else {
    }
  }
}
