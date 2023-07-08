import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) {}
  async login() {
    // Perform validation logic here
    if (this.username === 'admin' && this.password === 'password') {
      // Successful login
      console.log('Login successful');
      // Redirect to another page
      this.navCtrl.navigateForward('/homer/home');
    } else {
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


