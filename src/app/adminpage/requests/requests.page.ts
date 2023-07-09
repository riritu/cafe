import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  clickBack () {
    this.navCtrl.back();
  }
  
}
