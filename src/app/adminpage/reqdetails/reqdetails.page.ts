import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reqdetails',
  templateUrl: './reqdetails.page.html',
  styleUrls: ['./reqdetails.page.scss'],
})
export class ReqdetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  clickBack () {
    this.navCtrl.back();
  }
  
}
