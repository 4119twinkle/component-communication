import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
  @Input() Active1?:Model[];
  @Output() activeToVendor=new EventEmitter()
  
  Onclick(vendor:Model){
    this.activeToVendor.emit(vendor);
    alert("button is clicked");
  }
    
  

  constructor() { }

  ngOnInit(): void {
  }

}
