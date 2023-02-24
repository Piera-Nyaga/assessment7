import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParcelserviceService } from '../services/parcel.service';
import { Parcel } from '../interface';



@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private fb:FormBuilder, private parcelService:ParcelserviceService){}
  form!: FormGroup;


  ngOnInit(){
    this.form= this.fb.group({
      name:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],   
      destination:[null, [Validators.required]]
    })
  }

  addParcel(){
    let parcel:Parcel={ ...this.form.value}
    this.parcelService.addParcel(parcel)

    this.form.reset()
  }

}