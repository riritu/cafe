import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
 
export interface FormData {
  name: string;
  unit: string;
  ids: string;
  date: string;
  type: string;
  email: string;
  pnum: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  formDataList: FormData[] = [];
  selectedSegment: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    const storedData = localStorage.getItem('tenants');
    if (storedData) {
      this.formDataList = JSON.parse(storedData);
    }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    const emel = (document.getElementById("email") as HTMLInputElement).value;
    const pnem = (document.getElementById("tel") as HTMLInputElement).value;
    const nem = (document.getElementById("name") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const det = (document.getElementById("date") as HTMLInputElement).value;
    const id = this.generateRandomId();
    if (nem === '' || hos === '' || det === '') {
      const toast = await this.toastController.create({
        message: 'Invalid credentials!',
        duration: 2000, // Duration in milliseconds
        color: 'danger', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
    }
     else {
      const formData: FormData = {
        name: nem,
        unit: hos,
        ids: id,
        date: det,
        email: emel,
        pnum: pnem,
        type: this.selectedSegment,
      };
      this.formDataList.push(formData);
      localStorage.setItem("formentry", JSON.stringify(this.formDataList));
      console.log(this.formDataList);
      const toast = await this.toastController.create({
        message: 'Succesfull Booking!',
        duration: 2000, // Duration in milliseconds
        color: 'success', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
      this.navCtrl.navigateBack('/homer/gallery');
      
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

  clickBack() {
    this.navCtrl.back();
  }

}