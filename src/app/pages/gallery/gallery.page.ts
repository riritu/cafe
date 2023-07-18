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
      imgModel:  'assets/orange.png',
      modelimg1: 'assets/ab1 (1).png',
      modelimg2: 'assets/ab1 (2).png',
      modelimg3: 'assets/ab1 (3).png',
      modelimg4: 'assets/ab1 (4).png',
      modelimg5: 'assets/ab1 (5).png',
      modelimg6: 'assets/ab1 (6).png',
    };
    const detail2 = {
      modelName: 'Model 2',
      imgModel:  'assets/pinkk.png',
      modelimg1: 'assets/ab2 (1).png',
      modelimg2: 'assets/ab2 (2).png',
      modelimg3: 'assets/ab2 (3).png',
      modelimg4: 'assets/ab2 (4).png',
      modelimg5: 'assets/ab2 (5).png',
      modelimg6: 'assets/ab2 (6).png',
    };
    const detail3 = {
      modelName: 'Model 3',
      imgModel:  'assets/Rectangle 30.png',
      modelimg1: 'assets/ab3 (1).png',
      modelimg2: 'assets/ab3 (2).png',
      modelimg3: 'assets/ab3 (3).png',
      modelimg4: 'assets/ab3 (4).png',
      modelimg5: 'assets/ab3 (5).png',
      modelimg6: 'assets/ab3 (6).png',
    };
    const detail4 = {
      modelName: 'Model 4',
      imgModel:  'assets/bluee.png',
      modelimg1: 'assets/ab4 (1).png',
      modelimg2: 'assets/ab4 (2).png',
      modelimg3: 'assets/ab4 (3).png',
      modelimg4: 'assets/ab4 (4).png',
      modelimg5: 'assets/ab4 (5).png',
      modelimg6: 'assets/ab4 (6).png',
    };

    this.modelDetails.push(detail1, detail2, detail3, detail4);

    if (index >= 0 && index < this.modelDetails.length) {
      const selectedModel = this.modelDetails[index];
      localStorage.clear();
      this.navCtrl.navigateForward('/unitabout', {
        state: {
          modelDetails: selectedModel
        }
      });
    }
  }
}
