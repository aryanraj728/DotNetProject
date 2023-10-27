import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeListComponent } from "./components/home/home-list/home-list.component";
import { AddMobileComponent } from "./components/drugs/add-mobile/add-mobile.component";
import { UserLoginComponent } from "./components/login/user-login/user-login.component";
import { EditMobileComponent } from "./components/drugs/edit-mobile/edit-mobile.component";
import { SignUpComponent } from "./components/signup/sign-up/sign-up.component";
import { DisplayMobileComponent } from "./components/drugs/display-mobile/display-mobile.component";
import { UserCartComponent } from "./components/drugs/user-cart/user-cart.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { AdminorderListComponent } from "./components/adminorder-list/adminorder-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { JwtInterceptor } from "./components/login/user-login/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    HomeListComponent,
    AddMobileComponent,
    EditMobileComponent,
    UserLoginComponent,
    SignUpComponent,
    DisplayMobileComponent,
    UserCartComponent,
    OrderListComponent,
    AdminorderListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
