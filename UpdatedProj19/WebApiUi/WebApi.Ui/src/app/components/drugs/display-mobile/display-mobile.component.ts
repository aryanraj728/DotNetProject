import { MaybeSourceFileWithOriginalFile } from '@angular/compiler-cli/src/ngtsc/program_driver';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCart } from 'src/app/models/addcart.model';
import { Mobile } from 'src/app/models/mobiles.model';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-display-mobile',
  templateUrl: './display-mobile.component.html',
  styleUrls: ['./display-mobile.component.css']
})
export class DisplayMobileComponent implements OnInit{
  mobilename: string = '';
  reqQuantity: number[] = [];
  mobilesDisplay: Mobile[] = [];
  addCartModel: AddCart = {
    mobileId: 0,
    ReqQuantity: 0
  }
  constructor(private mobilesServices: MobilesService,private router: Router){ }
  ngOnInit(): void {
    this.mobilesServices.getMobiles()
    .subscribe({
      next: (mobiles) => {
        this.mobilesDisplay = mobiles;
        console.log(mobiles);
      },
      error: (response) => {
        console.log(response);
      }

    })
  }
  getMobileByMobileName(name: string)
  {
    this.mobilesServices.getMobileByName(this.mobilename)
    .subscribe({
      next: (mobiles) => {
        this.mobilesDisplay = mobiles;
        console.log(mobiles);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  postCart(id:number,reqQuantity:number)
  {
    this.addCartModel.mobileId=id;
    this.addCartModel.ReqQuantity=reqQuantity;
    this.mobilesServices.postCart(this.addCartModel)
    .subscribe({
      next: (response) => {
        console.log(response);
        alert("Fail");
      },
      error: (response) => {
        console.log(response);
        alert("Success")
        this.router.navigate(['displaydrug/cart']);
      }
    })
  }

  }



