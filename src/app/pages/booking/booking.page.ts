import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

interface FormData {
  name: string;
  unit: string;
  prize: string;
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
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      this.formDataList = JSON.parse(storedFormData);
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const nem = (document.getElementById("name") as HTMLInputElement).value;
    const hos = (document.getElementById("house") as HTMLInputElement).value;
    const byad = (document.getElementById("pay") as HTMLInputElement).value;
    const det = (document.getElementById("date") as HTMLInputElement).value;
    const id = this.generateRandomId();

    const formData: FormData = {
      name: nem,
      unit: hos,
      prize: byad,
      ids: id,
      date: det,
    };

    this.formDataList.push(formData);
    localStorage.setItem("formentry", JSON.stringify(this.formDataList));
    console.log(this.formDataList);
    (document.getElementById("myForm") as HTMLFormElement).reset();
    alert("Form data stored successfully!");

    this.displayList(); // Update the displayed list
  }

  displayList() {
    let html = "<ul>";
    for (let i = 0; i < this.formDataList.length; i++) {
      const formData = this.formDataList[i];
      html += "<li>Name:" + formData.name + ", Unit: " + formData.unit + ", Prize: " + formData.prize + ", ID: " + formData.ids + ", Date: " + formData.date + "</li>";
    }
    html += "</ul>";
    document.getElementById("demo")!.innerHTML = html;
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