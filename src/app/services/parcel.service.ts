import { Injectable } from '@angular/core';
import { Parcel } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ParcelserviceService {
  private parcel: Parcel[] = [
    {
      name: 'Ann Piera',
      email: 'pieran@gmail.com',
      destination: 'Embu'
    }
  ]

  constructor() { }


  addParcel(parcel: Parcel): void {
    this.parcel.push(parcel);
    console.log(this.parcel);
  }
  getParcel() {
    return this.parcel;
  }


}
