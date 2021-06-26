import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { SharedRayonService } from 'src/app/service/shared-rayon.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() isDisplayProduct: boolean;
  displayedColumns: string[] = ['criteres', 'resultats'];
  dataSource: any[];
  dataSourceObs: Product[];
  dataP: any;
  results: any;
  sub: Subscription;

  constructor(private rayonService: SharedRayonService) {

    this.dataSource = this.rayonService.items;
  }

  ngOnInit() {
    console.log(this.dataSource);
    this.sub = this.rayonService.getProducts().subscribe(
      value => {
        this.dataSourceObs = value;
        console.log(this.dataSourceObs);
      });
  }
}
