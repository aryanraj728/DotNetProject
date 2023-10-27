import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Mobile } from 'src/app/models/mobiles.model';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.css']
})
export class EditMobileComponent implements OnInit{
  mobileDetails: Mobile = {
    MobileId: 0,
    MobileName: '',
    MobilePrice: 0,
    MobileQuantityAvailable: 0,
    MobileImage: '',
    SuccessMessage: '',
    Ram: '',
    Storage: ''
  }
  constructor(private route: ActivatedRoute,private mobileService: MobilesService,private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const MobileId = params.get('MobileId');
        if(MobileId) {
          this.mobileService.getMobile(MobileId)
          .subscribe({
            next: (response) => {
              this.mobileDetails = response;

            }
          })

        }
      }
    })
  }
  updateMobile() {
    this.mobileService.updateMobile(this.mobileDetails.MobileId,this.mobileDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['mobiles']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  deleteMobile(id: number) {
    this.mobileService.deleteMobile(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['mobiles'])
      },
      error: (response) => {
        //this.displayErrorAlert('LoginFailed: ' + response.message);
        alert("Failed to delete")
      }
    })
  }
  

}
