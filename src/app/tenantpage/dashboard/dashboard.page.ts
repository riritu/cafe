import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tenant } from '../../adminpage/account/account.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  accDetails: any;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.accDetails = this.getFormDetailsById(id);
      
    });
  }

  getFormDetailsById(id: string) {
    const storedFormData = localStorage.getItem('tenants');
    if (storedFormData) {
      const accounttList: Tenant[] = JSON.parse(storedFormData);
      const accDetails = accounttList.find(tenant => tenant.ids === id);
      return accDetails;
    }
    return null;
  }
}

