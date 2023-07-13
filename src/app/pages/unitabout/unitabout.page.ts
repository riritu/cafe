import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unitabout',
  templateUrl: './unitabout.page.html',
  styleUrls: ['./unitabout.page.scss'],
})
export class UnitaboutPage implements OnInit {
  modelDetails: any;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    this.modelDetails = history.state.modelDetails;
  }
}
 