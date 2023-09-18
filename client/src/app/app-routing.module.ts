import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {breadcrumb:'Home'} },
  { 
    // route for test-error 
    path: 'test-error', component: TestErrorComponent 
  },
  { 
    // route for server-error 
    path: 'server-error', component: ServerErrorComponent 
  },
  { 
    // route for not-found 
    path: 'not-found', component: NotFoundComponent 
  },
  {
    // route to lazy load child route when shop route is called
    path: 'shop', loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  }, 
  {
    // route to lazy load child route when shop basket is called
    path: 'basket', loadChildren: () => import('./basket/basket.module').then((m) => m.BasketModule),
  }, 
  {
    // route to lazy load child route when shop checkout is called
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    // route to lazy load child route when login and register is called
    path: 'account', loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
