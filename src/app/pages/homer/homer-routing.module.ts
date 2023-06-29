import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomerPage } from './homer.page';

const routes: Routes = [
  {
    path: '',
    component: HomerPage,
    children: [
      {
        
          path: 'home',
          loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('../../pages/contacts/contacts.module').then( m => m.ContactsPageModule),
      },
      {
        path: 'gallery',
        loadChildren: () => import('../../pages/gallery/gallery.module').then( m => m.GalleryPageModule)
      }     
    ] 
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomerPageRoutingModule {}
