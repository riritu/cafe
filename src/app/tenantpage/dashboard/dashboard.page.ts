import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Payment } from '../../adminpage/payment/payment.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  paymentInfos: any;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

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
      const paymentInfo = paymentList.find(payment => payment.name === id);
      return paymentInfo;
    }
    return null;
  }
}

