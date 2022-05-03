import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/core/services.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  carForm! : FormGroup;

  public submitted : boolean = false ;
  createdCar: any ;

  constructor(private formBuildder : FormBuilder, private serviceService:ServicesService) {

  this.carForm = this.formBuildder.group({

    brand : ["",[Validators.required]],
    model: ["",[Validators.required]],
    year: ["",[Validators.required]],
    image: ["",[Validators.required]],


  })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true ;
    if (this.carForm.valid){
      this.createdCar = {
        brand: this.carForm.get('brand')?.value,
        model: this.carForm.get('model')?.value,
        year: this.carForm.get('year')?.value,
        image: this.carForm.get('image')?.value,
      }
      this.serviceService.postCar(this.createdCar).subscribe();
      this.submitted = false ;
    }
  }
}
