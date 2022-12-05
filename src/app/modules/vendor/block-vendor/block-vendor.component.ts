import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/model';


@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() BList?: Model[];
  constructor() { }

  ngOnInit(): void {
  }

}
