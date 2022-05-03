import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  cars : any;

  constructor(private serviceService : ServicesService) { }

  ngOnInit(): void {
    this.serviceService.getCars().subscribe((res:any)=>
    {this.cars = res})
  }
}
