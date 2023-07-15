import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormData } from '../../pages/booking/booking.page';

@Component({
  selector: 'app-reqdetails',
  templateUrl: './reqdetails.page.html',
  styleUrls: ['./reqdetails.page.scss'],
})
export class ReqdetailsPage implements OnInit {
  formDetails: any;

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.formDetails = this.getFormDetailsById(id);
      
    });
  }

  clickBack () {
    this.navCtrl.back();
  }

  getFormDetailsById(id: string) {
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      const formDataList
      : FormData[] = JSON.parse(storedFormData);
      const formDetail = formDataList.find(formData => formData.ids === id);
      return formDetail;
    }
    return null;
  }
}

  
  

