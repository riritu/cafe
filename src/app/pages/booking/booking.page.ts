import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

interface FormData {
  name: string;
  unit: string;
  ids: string;
  date: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  formDataList: FormData[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Retrieve stored form data from local storage
    
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const nem = (document.getElementById("name") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const det = (document.getElementById("date") as HTMLInputElement).value;
    const id = this.generateRandomId();

    const formData: FormData = {
      name: nem,
      unit: hos,
      ids: id,
      date: det,
    };

    this.formDataList.push(formData);
    localStorage.setItem("formentry", JSON.stringify(this.formDataList));
    console.log(this.formDataList);
    (document.getElementById("myForm") as HTMLFormElement).reset();
    alert("Form data stored successfully!");
    this.navCtrl.navigateForward('/requests');

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