import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelserviceService } from '../services/parcel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Parcel } from '../interface';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  parcels:Parcel[]=[]

constructor(private parcelService:ParcelserviceService, private router:Router, private route:ActivatedRoute){}


ngOnInit(): void {
  this.parcels = this.parcelService.getParcel()
  console.log(this.parcelService.getParcel());
}

}
