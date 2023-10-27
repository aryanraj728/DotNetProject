import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartAdd } from 'src/app/models/cartadd.model';
import { ShowCart } from 'src/app/models/showcart.model';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit{
  showCart: ShowCart [] = [];
  cartAdd: CartAdd = {
    CartId: 0
  }
  constructor(private mobilesServices: MobilesService,private router: Router){ }
  ngOnInit(): void {
    this.mobilesServices.getCart()
    .subscribe({
      next: (showCart:any) => {
        this.showCart = showCart;
        console.log(showCart);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  addOrder(id:number) {
    this.cartAdd.CartId=id;
    this.mobilesServices.addOrder(this.cartAdd)
    .subscribe({
      next: (response:any) => {
        alert("Failed to Place Order");
        
      },
      error: (response:any) => {
        alert("Order Placed Successfully");
        this.router.navigate(['displaymobile/cart/orders']);
      }

    })
 
  }
  deleteCart(id:number) {
    //this.cartAdd.CartId=id;
    this.mobilesServices.deleteCart(id)
    .subscribe(
      () => {
        alert("Failed to Delete Order");
        
      },
      (error) => {
        alert("Deleted Successfully");
        this.router.navigate(['displaymobile']);
      }

    )
 
  }
}
