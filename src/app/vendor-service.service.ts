import { Injectable } from '@angular/core';
import { Model } from './model';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  VendorList : Model[] = [
    {name : 'Abhishek Roy' ,age : 34,city: 'Jaipur'},
    {name : 'Abhi Sharma',age : 32,city:'Nagpur'},
    {name : 'Naman Gupta',age : 30,city:'Jabalpur'}
  ];
  getList(){
    return this.VendorList;
  }
  blockedList: Model[]= [];


  constructor() { }
}
