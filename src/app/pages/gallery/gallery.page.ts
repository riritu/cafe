import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  modelDetails: any[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  passModeldetails() {

    const detail = {
      modelName: 'Model 1',
      modelimg1: 'assets/ab 1 (1).png', 
      modelimg2: 'assets/ab 1 (2).png', 
      modelimg3: 'assets/ab 1 (3).png', 
      modelimg4: 'assets/ab 1 (4).png', 
      modelimg5: 'assets/ab 1 (5).png', 
      modelimg6: 'assets/ab 1 (6).png'
    };
    this.modelDetails.push(detail);
    localStorage.setItem("units", JSON.stringify(this.modelDetails));
    this.navCtrl.navigateForward('/unitabout');
  }


}
