import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ServicesService } from 'src/app/core/services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public car : any ;

  constructor(private activatedRoute: ActivatedRoute, private servicesService : ServicesService , private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.servicesService.getCar(params.get("idcar")).subscribe(car => {
        this.car = car
        console.log(this.car)
      })
    })
  }
  deleteCar(idCar : any){
    window.confirm("are you sure?")
    if(confirm("Car deleted!")){
    this.servicesService.deleteCar(idCar).subscribe(() => {
      this.router.navigate(['/gallery'])
    } )
  } else {
    this.router.navigate(['/gallery'])

  }
}
}
