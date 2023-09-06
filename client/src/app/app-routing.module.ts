import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
