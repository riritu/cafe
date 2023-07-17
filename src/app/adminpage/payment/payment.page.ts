import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

export interface Payment {
  name: string;
  unit: string;
  ids: string;
  date: string;
  mop: string;
  amount: string;
  rfn: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  paymentList: Payment[] = [];
  accDetailList: { lname: string }[] = [];
  selectedOption: string = ''; 
  
  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    const storedData = localStorage.getItem('tenants');
    if (storedData) {
      this.accDetailList = JSON.parse(storedData);
    }
    
  }

  async paymentSubmit(event: Event) {
    event.preventDefault();
    const nem = (document.getElementById("name") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const det = (document.getElementById("date") as HTMLInputElement).value;
    const bayd = (document.getElementById("prize") as HTMLInputElement).value;
    const ref = (document.getElementById("rfn") as HTMLInputElement).value;
    const gcash = (document.getElementById("mop") as HTMLInputElement).value;
    const id = this.generateRandomId();
    const payment: Payment = {
      name: nem,
      unit: hos,
      ids: id,
      date: det,
      mop: gcash,
      amount: bayd,
      rfn: ref,
    };

    this.paymentList.push(payment);
    localStorage.setItem('payments',JSON.stringify(this.paymentList));
    const toast = await this.toastController.create({
      message: 'Succesfull Input!',
      duration: 2000, // Duration in milliseconds
      color: 'success', // Optional color for the toast
      position: 'top', // Position of the toast on the screen (top, bottom, or middle)
    });
    toast.present();
    this.navCtrl.navigateBack('/route/dahboard');

  }



  generateRandomId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const idLength = 8;
    let randomId = "";
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
  }
}
