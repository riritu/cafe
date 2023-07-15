import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormData } from '../../pages/booking/booking.page';

export interface StoreRequest {
  name: string;
  unit: string;
  ids: string;
  date: string;
  hatol: string;
}

@Component({
  selector: 'app-reqdetails',
  templateUrl: './reqdetails.page.html',
  styleUrls: ['./reqdetails.page.scss'],
})
export class ReqdetailsPage implements OnInit {
  formDetails: any;
  storedRequest: StoreRequest[] = [];

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
      const formDataList: FormData[] = JSON.parse(storedFormData);
      const formDetail = formDataList.find(formData => formData.ids === id);
      return formDetail;
    }
    return null;
  }

  approveIt(id: string, action: string)  {  
    // Retrieve the array from local storage
    const storedFormData = localStorage.getItem('formentry');
    if (storedFormData) {
      const formDetailsArray: FormData[] = JSON.parse(storedFormData);
      const itemToRemove = formDetailsArray.find(formData => formData.ids === id);

      if (itemToRemove) {

        const storeRequest: StoreRequest = {
          name: itemToRemove.name,
          unit: itemToRemove.name,
          ids: itemToRemove.ids,
          date: itemToRemove.date,
          hatol: action,
        };
        const updatedFormDetailsArray = formDetailsArray.filter(item => item !== itemToRemove);
        const updatedFormDetailsString = JSON.stringify(updatedFormDetailsArray);
        localStorage.setItem('formentry', updatedFormDetailsString);
        this.storedRequest.push(storeRequest);
        localStorage.setItem('storedrequest', JSON.stringify(storeRequest));
        this.navCtrl.navigateBack('/dahboard');
        console.log(storeRequest);
      }      
    } 
    
  }
  
}
  

