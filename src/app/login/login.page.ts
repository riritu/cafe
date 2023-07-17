import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Tenant } from '../adminpage/account/account.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  accounttList: Tenant[] = [];

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  ngOnInit() {
    const storedFormData = localStorage.getItem('tenants');
    if (storedFormData) {
      this.accounttList = JSON.parse(storedFormData);
      console.log(this.accounttList)
    }
  }

  async login() {
    const storedFormData = localStorage.getItem('tenants');
    if (this.username === 'admin' && this.password === 'password') {
      this.navCtrl.navigateForward('/route/dahboard');
    }
    else if (storedFormData) {
      const accounttList: Tenant[] = JSON.parse(storedFormData);
      console.log(accounttList)
      const matchedUser = accounttList.find((tenant) => tenant.user === this.username && tenant.pass === this.password);  
      if (matchedUser) {
        const userId = matchedUser.lname;
        this.navCtrl.navigateForward(['/tabs/dashboard', userId]);
      }
      else {
        const toast = await this.toastController.create({
          message: 'Invalid credentials!',
          duration: 10000,
          color: 'danger',
          position: 'top',
        });
        toast.present();
      }
    } 
    else {
      // Invalid login
      const toast = await this.toastController.create({
        message: 'Invalid credentials!',
        duration: 10000, // Duration in milliseconds
        color: 'danger', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
    }    
    } 
    
  }

