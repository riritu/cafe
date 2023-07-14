import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homer/home',
    pathMatch: 'full'
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./adminpage/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'homer',
    loadChildren: () => import('./pages/homer/homer.module').then( m => m.HomerPageModule)
  },
  {
    path: 'dahboard',
    loadChildren: () => import('./adminpage/dahboard/dahboard.module').then( m => m.DahboardPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./adminpage/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'unitabout',
    loadChildren: () => import('./pages/unitabout/unitabout.module').then( m => m.UnitaboutPageModule)
  },
  {
    path: 'tenant',
    loadChildren: () => import('./tenant/tenant.module').then( m => m.TenantPageModule)
  },
  {
    path: 'route',
    loadChildren: () => import('./adminpage/route/route.module').then( m => m.RoutePageModule)
  },  {
    path: 'modelthree',
    loadChildren: () => import('./modelthree/modelthree.module').then( m => m.ModelthreePageModule)
  },
  {
    path: 'modelfour',
    loadChildren: () => import('./modelfour/modelfour.module').then( m => m.ModelfourPageModule)
  },
  {
    path: 'modelone',
    loadChildren: () => import('./modelone/modelone.module').then( m => m.ModelonePageModule)
  },
  {
    path: 'modeltwo',
    loadChildren: () => import('./modeltwo/modeltwo.module').then( m => m.ModeltwoPageModule)
  }

 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
