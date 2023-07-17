import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReqdetailsPage } from './adminpage/reqdetails/reqdetails.page';
import { DashboardPage } from './tenantpage/dashboard/dashboard.page';

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
    path: 'unitabout',
    loadChildren: () => import('./pages/unitabout/unitabout.module').then( m => m.UnitaboutPageModule)
  },
  {
    path: 'tenant',
    loadChildren: () => import('./tenant/tenant.module').then( m => m.TenantPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'route',
    loadChildren: () => import('./adminpage/route/route.module').then( m => m.RoutePageModule)
  },
  {
    path: 'reqdetails/:id', component: ReqdetailsPage 
  },
  {
    path: 'tabs/dashboard/:id', component: DashboardPage 
  },
  {
    path: 'reqdetails',
    loadChildren: () => import('./adminpage/reqdetails/reqdetails.module').then( m => m.ReqdetailsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tenantpage/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./tenantpage/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./adminpage/account/account.module').then( m => m.AccountPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
