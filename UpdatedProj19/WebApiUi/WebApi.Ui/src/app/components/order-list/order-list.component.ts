import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderView } from 'src/app/models/orderView.model';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{
  showOrders: OrderView [] = [];
  constructor(private mobilesServices: MobilesService,private router: Router){ }
  ngOnInit(): void {
    this.mobilesServices.getUserOrders()
    .subscribe({
      next: (showOrders:any) => {
        this.showOrders = showOrders;
        console.log(showOrders);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  deleteOrder(id:number){
    this.mobilesServices.deleteOrder(id)
    .subscribe({
      next: (response:any) => {
        alert("Failed to Delete Order");
      },
      error: (response:any) => {
        alert("Deleted Succesfully");
        this.router.navigate(['displaymobile'])
      }
    })
  }


}
