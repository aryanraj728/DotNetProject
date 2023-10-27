import { RouterModule, Routes } from "@angular/router";
import { HomeListComponent } from "./components/home/home-list/home-list.component";
import { RoleguardService } from "./services/roleguard.service";
import { AddMobileComponent } from "./components/drugs/add-mobile/add-mobile.component";
import { EditMobileComponent } from "./components/drugs/edit-mobile/edit-mobile.component";
import { UserLoginComponent } from "./components/login/user-login/user-login.component";
import { SignUpComponent } from "./components/signup/sign-up/sign-up.component";
import { DisplayMobileComponent } from "./components/drugs/display-mobile/display-mobile.component";
import { UserCartComponent } from "./components/drugs/user-cart/user-cart.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { AdminorderListComponent } from "./components/adminorder-list/adminorder-list.component";
import { NgModule } from "@angular/core";
import { MobilesListComponent } from "./components/drugs/mobiles-list/mobiles-list.component";
import { CommonModule, NgFor, NgIf } from '@angular/common';
const routes: Routes = [
  {
    path: '',component: HomeListComponent
  },
  {
    path: 'mobiles',component: MobilesListComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'mobiles/add',component: AddMobileComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'mobiles/edit/:MobileId',component: EditMobileComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  },
  {
    path: 'home/users/login', component: UserLoginComponent
  },
  {
    path: 'signup', component: SignUpComponent

  },
  {
    path: 'displaymobile', component: DisplayMobileComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "displaymobile/cart", component: UserCartComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "displaymobile/cart/orders", component: OrderListComponent,canActivate: [RoleguardService],data: {expectedRole: 'user'}
  },
  {
    path: "mobiles/orders", component: AdminorderListComponent,canActivate: [RoleguardService],data: {expectedRole: 'admin'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations:[MobilesListComponent,]
})
export class AppRoutingModule { }
