import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    // route for test-error 
    path: 'test-error', component: TestErrorComponent 
  },
  {
    // route to lazy load cgild route when shop route is called
    path: 'shop', loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  }, 
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
