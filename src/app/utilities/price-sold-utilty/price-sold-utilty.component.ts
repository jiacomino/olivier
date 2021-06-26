import { Component, OnInit } from '@angular/core';
import { SharedRayonService } from 'src/app/service/shared-rayon.service';

@Component({
  selector: 'app-price-sold-utilty',
  templateUrl: './price-sold-utilty.component.html',
  styleUrls: ['./price-sold-utilty.component.scss']
})
export class PriceSoldUtiltyComponent implements OnInit {

  constructor(private rayonService: SharedRayonService) { }

  ngOnInit(): void {
  }

}
