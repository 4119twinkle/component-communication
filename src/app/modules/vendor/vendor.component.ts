import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model';
import { VendorServiceService } from 'src/app/vendor-service.service';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  sendblock(vendor:Model ){
    this.service.blockedList.push(vendor);
  }
    constructor(private service: VendorServiceService) {
    }
    Active: Model[] = this.service.getList();
    Blocked:Model[] =this.service.blockedList;
    ngOnInit(): void {
    }

}
