import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public url: string = 'http://localhost:5000/cars';
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get('http://localhost:5000/cars');
  }
  postCar(createdCar: any) {
    return this.http.post('http://localhost:5000/cars/newCar', createdCar);
  }
  getCar(idCar: string | null) {
    return this.http.get('http://localhost:5000/cars/' + idCar);
  }
  deleteCar(idCar : any) {
    return this.http.delete('http://localhost:5000/cars/' + idCar);
  }
}
