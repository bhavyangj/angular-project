import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './PAGES/admin/admin.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {path:'home', component: HomeComponent},
  {path:'admin', component: AdminComponent},
  // {path:'admin/add-product',   component: AddProductComponent},
  // {path:'admin/update-product', component: UpdateProductComponent},
  // {path:'admin/view-products', component: ViewProductsComponent},
  {path:'login', component: LoginComponent },
  // {path:'register', component: RegisterComponent  },
  // {path:'your-orders', component: OrderPlacedComponent },
  // {path:'checkout', component: CheckoutComponent},
  // {path:'wishlist', component: SavedItemsComponent},
  // {path:'complete-checkout', component: CompleteCheckoutComponent},
  // {path:'product-detail/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
