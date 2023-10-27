import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from 'src/app/models/mobiles.model';
import { MobilesService } from 'src/app/services/mobiles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  addMobileRequest: Mobile = {
    MobileId: 0,
    MobileName: '',
    MobilePrice: 0,
    MobileQuantityAvailable: 0,
    MobileImage: '',
    SuccessMessage: '',
    Ram: '',
    Storage: ''
  };
  isFormSubmitted = false;
  constructor(private mobileService: UsersService, private router: Router) {}
  ngOnInit(): void {
    
  }
  addMobile() {
    this.isFormSubmitted = true;
    this.mobileService.addMobile(this.addMobileRequest)
    .subscribe({
      next: (mobile) => {
        this.router.navigate(['mobiles']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
