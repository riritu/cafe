import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
  modelDetails: any[] = [];

  constructor(private navCtrl: NavController) {}

  passModeldetails(index: number) {
    const detail1 = {
      modelName: 'Model 1',
      modelimg1: 'assets/ab1 (1).png',
      modelimg2: 'assets/ab1 (2).png',
      modelimg3: 'assets/ab1 (3).png',
      modelimg4: 'assets/ab1 (4).png',
      modelimg5: 'assets/ab1 (5).png',
      modelimg6: 'assets/ab1 (6).png',
    };
    const detail2 = {
      modelName: 'Model 2',
      modelimg1: 'assets/ab1 (1).png',
      modelimg2: 'assets/ab1 (2).png',
      modelimg3: 'assets/ab1 (3).png',
      modelimg4: 'assets/ab1 (4).png',
      modelimg5: 'assets/ab1 (5).png',
      modelimg6: 'assets/ab1 (6).png',
    };

    this.modelDetails.push(detail1, detail2);

    if (index >= 0 && index < this.modelDetails.length) {
      const selectedModel = this.modelDetails[index];
      this.navCtrl.navigateForward('/unitabout', {
        state: {
          modelDetails: selectedModel
        }
      });
    }
  }
}
