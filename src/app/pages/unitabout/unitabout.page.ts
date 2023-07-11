import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-unitabout',
  templateUrl: './unitabout.page.html',
  styleUrls: ['./unitabout.page.scss'],
})
export class UnitaboutPage implements OnInit {
  modelDetails: any[] = [];
  constructor() { }

  ngOnInit() {
    const storedData = localStorage.getItem("units");
    if (storedData) {
      this.modelDetails = JSON.parse(storedData);
    }
    console.log(this.modelDetails)
  }
  
}
