
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Payment as AdminPayment } from '../../adminpage/payment/payment.page'; // Rename the imported interface
import { ActivatedRoute } from '@angular/router';

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
      const filteredPayments = paymentList.filter(payment => payment.name === id);
      return filteredPayments;
    }
    return [];
  }
}

