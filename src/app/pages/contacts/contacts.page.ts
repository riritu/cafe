import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

export interface Email {
  name: string,
  email: string,
  coms: string,
  unit: string,
  tel: string,
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  comsList: Email[] = [];

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    const storedData = localStorage.getItem('emails');
    if(storedData) {
      this.comsList = JSON.parse(storedData);
      console.log(this.comsList)
    }
  }

  async emailSubmit(event: Event) {
    event.preventDefault();
    const emel = (document.getElementById("email") as HTMLInputElement).value;
    const pnem = (document.getElementById("tel") as HTMLInputElement).value;
    const nem = (document.getElementById("name") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const sabi = (document.getElementById("comms") as HTMLInputElement).value;
    if (nem === '') {
      const toast = await this.toastController.create({
        message: 'Invalid credentials!',
        duration: 2000, // Duration in milliseconds
        color: 'danger', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
    }
    else {
      const email: Email = {
        name: nem,
        email: emel,
        coms: sabi,
        unit: hos,
        tel: pnem,
      }
      this.comsList.push(email);
      localStorage.setItem('emails', JSON.stringify(this.comsList))
      const toast = await this.toastController.create({
        message: 'Succesful Input!',
        duration: 2000, // Duration in milliseconds
        color: 'success', // Optional color for the toast
        position: 'top', // Position of the toast on the screen (top, bottom, or middle)
      });
      toast.present();
    }
  }
}
