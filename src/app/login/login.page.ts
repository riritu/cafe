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

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  ngOnInit() {
  }

  async login() {
    const storedFormData = localStorage.getItem('tenants');
    if (storedFormData) {
      const accounttList: Tenant[] = JSON.parse(storedFormData);
      const matchedUser = accounttList.find((tenant) => tenant.user === this.username && tenant.pass === this.password);  
      if (matchedUser) {
        const userId = matchedUser.ids;
        this.navCtrl.navigateForward(['/tabs/dashboard', userId]);

      }
      } else {
        const toast = await this.toastController.create({
          message: 'Invalid credentials!',
          duration: 10000,
          color: 'danger',
          position: 'top',
        });
        toast.present();
      }
     
    } 
    
  }

