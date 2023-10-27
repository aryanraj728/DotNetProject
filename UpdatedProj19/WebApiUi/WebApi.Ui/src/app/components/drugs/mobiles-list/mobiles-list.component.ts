import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/models/mobiles.model';
import { MobilesService } from 'src/app/services/mobiles.service';

@Component({
  selector: 'app-mobiles-list',
  templateUrl: './mobiles-list.component.html',
  styleUrls: ['./mobiles-list.component.css']
})
export class MobilesListComponent implements OnInit {
  
  mobiles: Mobile[] = [];
  MobileName: string = '';
  constructor(private mobilesServices: MobilesService){ }
  ngOnInit(): void {
    this.mobilesServices.getMobiles()
    .subscribe({
      next: (mobiles) => {
        this.mobiles = mobiles;
        console.log(mobiles);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  getMobileByName(name:string) {
    this.MobileName=name
    this.mobilesServices.getMobileByName(this.MobileName)
    .subscribe({
      next: (mobiles) => {
        this.mobiles = mobiles;
        console.log(mobiles);
      },
      error: (response) => {
        console.log(response);
      }
    })

  }

}
