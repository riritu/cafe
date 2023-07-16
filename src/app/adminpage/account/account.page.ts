import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})

export class AccountPage implements OnInit {

  accounttList: Tenant[] = [];

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    // Retrieve stored form data from local storage
    
  }

  async accountSubmit(event: Event) {
    event.preventDefault();
    const lnem = (document.getElementById("lname") as HTMLInputElement).value;
    const fnem = (document.getElementById("fname") as HTMLInputElement).value;
    const mnem = (document.getElementById("mname") as HTMLInputElement).value;
    const gmail = (document.getElementById("email") as HTMLInputElement).value;
    const pnum = (document.getElementById("num") as HTMLInputElement).value;
    const uname = (document.getElementById("user") as HTMLInputElement).value;
    const pass = (document.getElementById("pass") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const id = this.generateRandomId();
    
    if (lnem === '' || hos === '' || fnem === '' || mnem === ''|| gmail === ''|| pnum === ''|| uname === '' || pass === '') {
      const toast = await this.toastController.create({
        message: 'Invalid credentials!',
        duration: 2000, // Duration in milliseconds
        color: 'danger', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
    }
    else {
      const tenant: Tenant = {
        lname: lnem,
        fname: fnem,
        mname: mnem,
        unit: hos,
        phone: pnum,
        email: gmail,
        ids: id,
        user: uname,
        pass: pass,
    };

    this.accounttList.push(tenant);
    localStorage.setItem('tenants',JSON.stringify(this.accounttList));
    const toast = await this.toastController.create({
      message: 'Succesfull Input!',
      duration: 2000, // Duration in milliseconds
      color: 'success', // Optional color for the toast
      position: 'top', // Position of the toast on the screen (top, bottom, or middle)
    });
    toast.present();
    this.navCtrl.navigateBack('/route/dahboard');

    }
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

