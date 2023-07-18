
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

export interface Payment {
  name: string;
  ids: string;
  amount: string;
  date: string;
  rfn: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  paymentInfos: Payment[] = [];

  constructor(private alertController: AlertController, private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.paymentInfos = this.getFormDetailsById(id);
    });
  }

  getFormDetailsById(id: string) {
    const storedFormData = localStorage.getItem('payments');
    if (storedFormData) {
      const paymentList: Payment[] = JSON.parse(storedFormData);
      const filteredPayments = paymentList.filter(payment => payment.name === id);
      return filteredPayments;
    }
    return [];
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

